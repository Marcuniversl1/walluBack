"use strict";

const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  async registerDoctor(ctx) {
    const { prenom, nom, specialisation, contact, profil, email, password } =
      ctx.request.body;

    const user = await strapi.plugins["users-permissions"].services.user.add({
      username: email,
      email,
      password,
      role: "Medecin", // Assuming 'Medecin' role exists
    });

    const medecin = await strapi.services.medecin.create({
      prenom,
      nom,
      specialisation,
      contact,
      profil,
      user: user.id,
    });

    return sanitizeEntity(user, {
      model: strapi.query("user", "users-permissions").model,
    });
  },

  async registerPatient(ctx) {
    const {
      prenom,
      nom,
      profil,
      date_naissance,
      contact,
      accompagnant,
      email,
      password,
    } = ctx.request.body;

    const user = await strapi.plugins["users-permissions"].services.user.add({
      username: email,
      email,
      password,
      role: "Patient", // Assuming 'Patient' role exists
    });

    const patient = await strapi.services.patient.create({
      prenom,
      nom,
      profil,
      date_naissance,
      contact,
      accompagnant,
      user: user.id,
    });

    return sanitizeEntity(user, {
      model: strapi.query("user", "users-permissions").model,
    });
  },
};
