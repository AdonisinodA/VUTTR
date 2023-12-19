import mongoose from 'mongoose'

const toolSchema = new mongoose.Schema({
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

const ToolSchema = mongoose.model('tool', toolSchema);

export { ToolSchema };
