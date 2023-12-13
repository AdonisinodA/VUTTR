import mongoose from 'mongoose'

const tollSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  nome: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  tags: {
    type: [String],
    required: true
  }
});

const TollSchema = mongoose.model('tool', tollSchema);

export { TollSchema };
