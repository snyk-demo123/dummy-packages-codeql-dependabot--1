module.exports = {
  platform: 'azure',
  endpoint: 'https://dev.azure.com/keerthanakt94/',
  token: process.env.TOKEN,
  hostRules: [
    {
      hostType: 'npm',
      matchHost: 'pkgs.dev.azure.com',
      username: 'apikey',
      password: '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',
    },
  ],
  repositories: ['keerthanakt94/Main'],
};
