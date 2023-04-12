const service = require('../services/comments.service');

const getCommentsByAccountId = async (req, res) => {
  try {
    const { id } = req.params;
    const listOfComments = await service.getCommentsByAccountId(id);

    if (!listOfComments.length) {
      return res.status(404).json({ message: 'Nenhum comentário cadastrado' });
    }

    return res.status(200).json(listOfComments);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

const saveComment = async (req, res) => {  
  try {
    const { id } = req.params;
    const { message } = req.body;

    const comment = await service.saveComment(id, message);

    if (!comment) {
      return res.status(404).json({ message: 'Erro ao cadastrar o comentário' });
    }

    return res.status(200).json({ message: 'Comentário cadastrado com sucesso' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Algo deu errado!' });
  }
};

module.exports = {
  getCommentsByAccountId,
  saveComment,
};