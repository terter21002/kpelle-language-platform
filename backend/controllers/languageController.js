import Language from '../models/Language.js';

export const getAllLanguages = async (req, res) => {
  try {
    const languages = await Language.find();
    res.json(languages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getLanguageById = async (req, res) => {
  try {
    const language = await Language.findById(req.params.id);
    if (!language) {
      return res.status(404).json({ message: 'Language not found' });
    }
    res.json(language);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createLanguage = async (req, res) => {
  const language = new Language({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    levels: req.body.levels,
  });

  try {
    const newLanguage = await language.save();
    res.status(201).json(newLanguage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
