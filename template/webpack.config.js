module.exports = async (env, argv) => {
  const config = await import('./template/webpack.config.cjs');
  return config.default(env, argv);
};
