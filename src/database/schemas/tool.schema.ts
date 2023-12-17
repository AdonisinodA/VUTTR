import mongoose from 'mongoose'

const tollSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  description: {
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
