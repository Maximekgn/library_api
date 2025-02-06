import prisma from '../prisma/client.js'

export const getAllBooks = () => {
    return prisma.book.findMany()
}


export const getBookById = (req , res ) => {
    const { id } = req.params
    const result =  prisma.book.findUnique({
        where: {
            id: Number(id)
        }
    })

    if (!result) {
        res.send('Book not found')
    }

    res.send(result)
}

export const updateBook = (req , res) => {
    const response = prisma.book.update({
        where: {
            id: Number(id)
        },
        data
    })

    if(!response) {
        res.send('Error updating book')
    }

    res.send('Book updated successfully')
}

export const deleteBook = (id) =>{
    const response = primsa.book.delete({
        where: {
            id: Number(id)
        }
    })

    if (!response) {
        res.send('Error deleting book')
    }

    res.send('Book deleted successfully')
}

export const createBook = (req, res) =>{
    const data = req.body
    const response = prisma.book.create({
        data
    })

    if (!response) {
        res.send('Error creating book')
    }

    res.send('Book created successfully')
}

