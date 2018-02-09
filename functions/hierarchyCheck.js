module.exports = async (client, executor, target, guild = null) => {
  if (guild) {
    const executorMember = await guild.fetchMember(await client.fetchUser(executor.id));
    const targetMember = await guild.fetchMember(await client.fetchUser(target.id));

    return executorMember.highestRole.position > targetMember.highestRole.position;
  }

  return false;
};


module.exports = { requiredModules: [] };
module.exports = {
  name: "hierarchyCheck",
  type: "functions",
  description: "Checks to see that command executor is higher on guild's hierarchy than command target.",
};