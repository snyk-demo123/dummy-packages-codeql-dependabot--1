module.exports = {
  platform=azure,
  endpoint: 'https://dev.azure.com/ajitddarade/',
  token: process.env.TOKEN,
  hostRules: [
    {
      hostType: 'npm',
      matchHost: 'pkgs.dev.azure.com',
      username: 'ajitddarade',
      password: process.env.TOKEN,
    },
  ],
  repositories: ['snyk-demo123/dummy-packages-codeql-dependabot--1'],
};
