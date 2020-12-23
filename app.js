const token = "ee4c8d4e98d03f1a2a521207375dff3037bb7822";

const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: token });

let createIssue = async function (title, body, labels) {
  try {
    await octokit.request("POST /repos/seung-ik/practice_issue/issues", {
      owner: "seung-ik",
      repo: "practice_issue",
      title: title,
      body: body,
      labels: labels,
    });
  } catch (error) {
    console.log(error);
  }
};

createIssue("이것은제목입니다.", "이것은내용입니다.", ["invalid"]);
