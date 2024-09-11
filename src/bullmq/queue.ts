import { Queue } from 'bullmq';
import Redis from 'ioredis';
import { getLatestEmail } from '../services/emailService'; // Make sure to import your services

const redis = new Redis({
  host: 'localhost',
  port: 6379,
  password: 'manvswild75', // Your Redis password
  maxRetriesPerRequest: null,
});

const emailQueue = new Queue('emailQueue', { connection: redis });

export async function queueEmailJob() {
  try {
    const email = await getLatestEmail();

    if (email) {
      console.log('Unread email found, queuing job...');
      await emailQueue.add('process-email', { emailId: email.id });
    } else {
      console.log('No unread emails found, not queuing any job.');
    }
  } catch (error) {
    console.error('Error checking for unread emails:', error);
  }
}

export { emailQueue };
