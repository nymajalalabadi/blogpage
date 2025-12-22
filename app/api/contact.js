export default function handler(req, res) {
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
        console.log(newMessage);

        res.status(200).json({ message: 'Message sent successfully' });
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}