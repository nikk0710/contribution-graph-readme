import { ContributionData } from './types';


interface GitHubEvent {
    created_at: string;
    // ใส่ field อื่น ๆ ที่สนใจ
}

export const fetchContributionData = async (username: string): Promise<ContributionData[]> => {
    const url = `https://api.github.com/users/${username}/events`;
    const token = process.env.GITHUB_TOKEN;

    if (!token) throw new Error('GITHUB_TOKEN not found in environment variables');

    const res = await fetch(url, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json'
        }
    });

    if (!res.ok) throw new Error(`Failed to fetch contributions: ${res.status}`);

    // บอก TypeScript ว่า events เป็น array ของ GitHubEvent
    const events: GitHubEvent[] = await res.json() as GitHubEvent[];

    const data: ContributionData[] = events.map(e => ({
        date: e.created_at,
        count: 1 // แค่ตัวอย่าง
    }));

    return data;
};
