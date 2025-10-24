"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchContributionData = void 0;
const fetchContributionData = (username) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://api.github.com/users/${username}/events`;
    const token = process.env.GITHUB_TOKEN;
    if (!token)
        throw new Error('GITHUB_TOKEN not found in environment variables');
    const res = yield fetch(url, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json'
        }
    });
    if (!res.ok)
        throw new Error(`Failed to fetch contributions: ${res.status}`);
    // บอก TypeScript ว่า events เป็น array ของ GitHubEvent
    const events = yield res.json();
    const data = events.map(e => ({
        date: e.created_at,
        count: 1 // แค่ตัวอย่าง
    }));
    return data;
});
exports.fetchContributionData = fetchContributionData;
