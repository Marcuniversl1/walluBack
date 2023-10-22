'use strict';

/**
 * carnet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::carnet.carnet');
