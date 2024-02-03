import { Octokit } from "octokit";
import { useEffect } from "react";

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN,
});
//
const getRepoIssues = async ({ pageParam = 1 }) => {
  const owner = "angular";
  const repo = "angular-cli";
  const perPage = 100;
  try {
    const response = await octokit.request(
      `GET /repos/${owner}/${repo}/issues`,
      {
        owner: owner,
        repo: repo,
        per_page: perPage,
        page: pageParam,
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    const data = response.data;
    // console.log(data); // 데이터 확인을 위한
    return data;
  } catch (error) {
    console.error("Error fetching repo issues:", error.message);
    throw error;
  }
};

export const getDataList = async () => {
  try {
    const data = await getRepoIssues({ pageParam: 1 });
    // console.log("Data received inside getDataList:", data);
    return data; // 이 부분을 추가해야 합니다.
  } catch (error) {
    console.error("Error in getDataList:", error.message);
    throw error;
  }
};
// const Page = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getRepoIssues();
//         // 데이터를 사용하는 작업 추가
//         console.log("Data received:", data);
//       } catch (error) {
//         // 오류 처리
//         console.error("Error in fetchData:", error.message);
//       }
//     };

//     fetchData();
//   }, []); // 변경: 불필요한 함수 래핑 제거

//   return <>dd</>;
// };

// export default Page;
