import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const fontRegular = readFileSync(
	join(process.cwd(), 'src/assets/fonts/source-serif-4-400.woff'),
);
const fontSemibold = readFileSync(
	join(process.cwd(), 'src/assets/fonts/source-serif-4-600.woff'),
);

const fonts = [
	{
		name: 'Source Serif 4',
		data: fontRegular,
		weight: 400 as const,
		style: 'normal' as const,
	},
	{
		name: 'Source Serif 4',
		data: fontSemibold,
		weight: 600 as const,
		style: 'normal' as const,
	},
];

async function svgToPng(svg: string): Promise<Buffer> {
	const resvg = new Resvg(svg);
	return resvg.render().asPng();
}

export async function generatePostOG(title: string): Promise<Buffer> {
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '90px 100px',
					backgroundColor: '#ffffff',
					fontFamily: 'Source Serif 4',
				},
				children: [
					{
						type: 'div',
						props: {
							style: {
								fontSize: 64,
								fontWeight: 600,
								color: '#1a1a1a',
								lineHeight: 1.15,
								letterSpacing: '-0.01em',
								display: 'block',
								maxWidth: 1000,
							},
							children: title,
						},
					},
					{
						type: 'div',
						props: {
							style: {
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'baseline',
								color: '#6b6b6b',
								fontSize: 26,
								fontWeight: 400,
								borderTop: '1px solid #e5e5e5',
								paddingTop: 24,
							},
							children: [
								{
									type: 'span',
									props: {
										style: { fontWeight: 600, color: '#1a1a1a' },
										children: 'Mastering Primary',
									},
								},
								{
									type: 'span',
									props: { children: 'masteringprimary.com' },
								},
							],
						},
					},
				],
			},
		},
		{ width: 1200, height: 630, fonts },
	);
	return svgToPng(svg);
}

export async function generateDefaultOG(): Promise<Buffer> {
	const svg = await satori(
		{
			type: 'div',
			props: {
				style: {
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					padding: '100px',
					backgroundColor: '#ffffff',
					fontFamily: 'Source Serif 4',
				},
				children: [
					{
						type: 'div',
						props: {
							style: {
								fontSize: 96,
								fontWeight: 600,
								color: '#1a1a1a',
								lineHeight: 1.1,
								letterSpacing: '-0.02em',
							},
							children: 'Mastering Primary',
						},
					},
					{
						type: 'div',
						props: {
							style: {
								fontSize: 28,
								color: '#6b6b6b',
								marginTop: 24,
							},
							children: 'masteringprimary.com',
						},
					},
				],
			},
		},
		{ width: 1200, height: 630, fonts },
	);
	return svgToPng(svg);
}
