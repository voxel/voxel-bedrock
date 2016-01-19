'use strict';

module.exports = function(game, opts) {
  return new BedrockPlugin(game, opts);
};
module.exports.pluginInfo = {
  loadAfter: ['voxel-registry']
};

function BedrockPlugin(game, opts) {
  this.registry = game.plugins.get('voxel-registry');

  if (!this.registry) throw new Error('voxel-bedrock requires voxel-registry plugin');

  this.enable();
};

BedrockPlugin.prototype.enable = function() {
  this.registry.registerBlock('bedrock', {texture: 'bedrock', hardness: Infinity});
};

BedrockPlugin.prototype.disable = function() {
  // TODO: unregister block
};
