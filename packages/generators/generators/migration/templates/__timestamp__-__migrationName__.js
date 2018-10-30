module.exports = {
  up(queryInterface, Sequelize) {
    <%_ if (table !== 'false') { _%>
    return queryInterface.createTable(
      '<%=table%>',
      {
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
        deletedAt: Sequelize.DATE,
      }
    );
    <%_ } else { _%>
    // TODO
    <%_ } _%>
  },

  down(queryInterface, Sequelize) {
    <%_ if (table !== 'false') { _%>
    return queryInterface.dropTable('<%=table%>');
    <%_ } else { _%>
    // TODO
    <%_ } _%>
  }
};
