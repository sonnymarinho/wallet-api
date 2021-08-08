const sevenDays = 604800

const jwt = {
  secret: process.env.APP_SECRET || 'default',
  expiresIn: process.env.EXPIRES_IN || sevenDays,
}

export { jwt }
