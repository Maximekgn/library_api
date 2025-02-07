import prisma from '../prisma/client.js'

export const getAllBooks = async (req, res) => {
    try {
        const books = await prisma.book.findMany()
        res.json(books)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getBookById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await prisma.book.findUnique({
            where: {
                id: Number(id)
            }
        })

        if (!result) {
            return res.status(404).json({ error: 'Book not found' })
        }

        res.json(result)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const updateBook = async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const response = await prisma.book.update({
            where: {
                id: Number(id)
            },
            data
        })

        res.json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const deleteBook = async (req, res) => {
    try {
        const { id } = req.params
        await prisma.book.delete({
            where: {
                id: Number(id)
            }
        })

        res.json({ message: 'Book deleted successfully' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const createBook = async (req, res) => {
    try {
        const data = req.body
        const response = await prisma.book.create({
            data
        })

        res.status(201).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

