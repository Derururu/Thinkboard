Simple Thinkboard

To run, set up a .env file under the backend folder including the following:

MONGO_URI=<your_mongo_uri>

UPSTASH_REDIS_REST_URL=<your_redis_rest_url>
UPSTASH_REDIS_REST_TOKEN=<your_redis_rest_token>

NODE_ENV=development

Then: 
cd backend
npm install
npm run dev

and:
cd frontend
npm install
npm run dev
