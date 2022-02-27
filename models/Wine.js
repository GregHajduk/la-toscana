import mongoose from "mongoose";

const WineSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 50,
    },
    desc: {
      type: String,
      required: true,
      maxlength: 250,
    },
    img: {
      type: String,
      required: true,
    },
    prices: {
      type: [Number],
      required: true,
    },
    extras: {
      type: [
        {
          text: {
            type: String,
            required: true,
          },
          price: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.models.Wine || mongoose.model("Wine", WineSchema);
