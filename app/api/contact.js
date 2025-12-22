import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        // Store it in a database or in a file
        const newMessage = {
            email,
            name,
            message
        }

        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://yukari:81818181@cluster0.lz9vx.mongodb.net/?retryWrites=true&w=majority&appName=cluster0');
        } catch (error) {
            res.status(500).json({ message: 'Storing message failed.' });
        }

        const db = client.db('blog');

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed.' });
            return;
        } 

        client.close();

        res.status(200).json({ message: 'Message sent successfully', message: newMessage });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}