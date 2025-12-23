import { MongoClient } from 'mongodb';

export async function POST(request) {
    try {
        const { email, name, message } = await request.json();

        if (!email || !email.includes('@') || !name || name.trim() === '' || !message || message.trim() === '') {
            return Response.json({ message: 'Invalid input.' }, { status: 422 });
        }

        // Store it in a database or in a file
        const newMessage = {
            email,
            name,
            message
        };

        let client;

        const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.mongodb_clustername}`;

        try {
            client = await MongoClient.connect(connectionString);
        } catch (error) {
            return Response.json({ message: 'Storing message failed.' }, { status: 500 });
        }

        const db = client.db('blog');

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            return Response.json({ message: 'Storing message failed.' }, { status: 500 });
        }

        client.close();

        return Response.json({
            message: 'Message sent successfully',
            data: newMessage
        });
    } catch (error) {
        return Response.json({ message: 'Internal server error' }, { status: 500 });
    }
}

export async function GET() {
    return Response.json({ message: 'Method not allowed' }, { status: 405 });
}
