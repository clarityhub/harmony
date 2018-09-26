const getConfig = require('../utilities/config');

module.exports = (action) => {
   const config = getConfig();

    const migration = new config.migrations.provider(
        config.migrations.options
    );

    migration[action]()
        .then(migrations => {
            const response = migrations.map(({ file }) => file).join("\n");
            migration.close();
            console.log(response);
            console.log('Done!');
        })
        .catch(err => {
            migration.close();
            console.error(err);
            console.log('Failed!');
        }); 
}
