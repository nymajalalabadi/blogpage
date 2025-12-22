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

        try {
            client = await MongoClient.connect('mongodb+srv://yukari:81818181@cluster0.lz9vx.mongodb.net/?retryWrites=true&w=majority&appName=cluster0');
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
