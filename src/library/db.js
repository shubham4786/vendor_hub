const { dbUser, dbPassword } = process.env;

export const connectionStr = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.trbokq4.mongodb.net/vendorDB?retryWrites=true&w=majority`;
