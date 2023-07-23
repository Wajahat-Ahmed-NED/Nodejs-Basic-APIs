var config = {
    server: '20.63.81.190',
    ///246_TI_SOAR_SOC
    port: 1433, //update me
    trustServerCertificate: true,
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me SOC_PC6\Halleys
            password: 'Commtel@123',
        }
    },

    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'cyberOps',
        integratedSecurity: true,
        trustedConnection: true   //update me
    }
};

module.exports = config;