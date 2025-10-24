import 'dotenv/config'; // โหลด .env
import { fetchContributionData } from './fetcher';
import { renderGraph } from './renderer';
import { ContributionData, GraphOptions } from './types';
import * as fs from 'fs';
import { join } from 'path';

async function updateReadme() {
    try {
        const username = process.env.GITHUB_USERNAME!;
        const data: ContributionData[] = await fetchContributionData(username);

        const options: GraphOptions = { width: 80, height: 10 };
        const graphMarkdown = renderGraph(data, options);

        const readmePath = join(__dirname, '../README.md');
        const existingReadme = await fs.promises.readFile(readmePath, 'utf-8');

        const updatedReadme = existingReadme.replace(
            /<!-- CONTRIBUTION_GRAPH_START -->[\s\S]*<!-- CONTRIBUTION_GRAPH_END -->/,
            `<!-- CONTRIBUTION_GRAPH_START -->\n${graphMarkdown}\n<!-- CONTRIBUTION_GRAPH_END -->`
        );

        fs.writeFileSync(readmePath, updatedReadme, 'utf-8');

        console.log('README updated successfully with contribution graph!');
    } catch (error) {
        console.error('Error updating README:', error);
    }
}

updateReadme();
