const envVars = {
    PRIVATE_KEY: 'PRIVATE_KEY',
};

// Enforce env
for (const v of Object.values(envVars)) {
    if (!process.env.hasOwnProperty(v)) {
        throw new Error(`Missing env variable ${v}`);
    }
}

export const config = {
    privateKey: process.env[envVars.PRIVATE_KEY]!,
};