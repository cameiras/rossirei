module.exports = {
  TOKEN_SECRET: process.env.TOKEN_SECRET || 'my-precious',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://heroku:rossirei1234@ds019028.mlab.com:19028/heroku_mb84gl1j',
  SALT_WORK_FACTOR: 10,
  GITHUB_SECRET: process.env.GITHUB_SECRET || '',
  GOOGLE_SECRET: process.env.GOOGLE_SECRET || '1912308409123890',
  INSTAGRAM_SECRET: process.env.INSTAGRAM_SECRET || ''
};
