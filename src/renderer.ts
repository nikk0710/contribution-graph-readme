import { ContributionData, GraphOptions } from './types';

export function renderGraph(data: ContributionData[], options: GraphOptions = {}): string {
    const width = options.width ?? 80;
    const height = options.height ?? 10;

    const lines: string[] = data.map(d => {
        const count = Math.min(d.count, height);
        return `${d.date}: ${'■'.repeat(count)}`;
    });

    return lines.join('\n');
}
