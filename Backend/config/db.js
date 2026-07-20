import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
    const user = process.env.MONGODB_USER || 'priyanshusharma805878_db_user';
    const pass = process.env.MONGODB_PASS || 'B6lZG5Wg527CqYcJ';
    const dbName = process.env.MONGODB_DB || 'food-del';
    const srvUri = process.env.MONGODB_URI || `mongodb+srv://${user}:${pass}@cluster0.tdgprbv.mongodb.net/${dbName}?retryWrites=true&w=majority`;

    try {
        console.log('Attempting SRV connection...');
        await mongoose.connect(srvUri);
        console.log("✅ DB connected successfully (SRV)");
        return;
    } catch (error) {
        console.error("SRV connection failed:", error.message);
        // If SRV lookup is refused, try non-SRV connection using the shard hosts
        if (error.message && error.message.includes('querySrv')) {
            console.log('Attempting fallback to non-SRV connection string...');
            // Hosts discovered from SRV (hard-coded based on cluster DNS)
            const hosts = [
                'ac-pv9ea4q-shard-00-00.tdgprbv.mongodb.net:27017',
                'ac-pv9ea4q-shard-00-01.tdgprbv.mongodb.net:27017',
                'ac-pv9ea4q-shard-00-02.tdgprbv.mongodb.net:27017'
            ].join(',');
            // replicaSet name discovered from TXT record
            const replicaSet = 'atlas-n2rrda-shard-0';
            const nonSrv = `mongodb://${user}:${pass}@${hosts}/${dbName}?replicaSet=${replicaSet}&authSource=admin&ssl=true&retryWrites=true&w=majority`;

            try {
                await mongoose.connect(nonSrv);
                console.log('✅ DB connected successfully (non-SRV fallback)');
                return;
            } catch (err2) {
                console.error('Fallback connection failed:', err2.message);
                process.exit(1);
            }
        }

        process.exit(1);
    }
}

