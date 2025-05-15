import mongoose from 'mongoose';
import Language from '../models/Language.js';
import Lesson from '../models/Lesson.js';
import { config } from 'dotenv';

config();

// Connect to MongoDB using your URI
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/kpelle_lng',
    );
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

const seedLanguages = async () => {
  const languages = [
    {
      name: 'Kpelle Language',
      description: 'Learn the Kpelle language spoken in Liberia and Guinea',
      imageUrl: '/images/kpelle.png',
      levels: [
        {
          name: 'Beginner',
          description: 'Basic vocabulary and phrases',
          lessonRange: { start: 1, end: 20 },
          topics: [
            'Greetings and Basic Phrases',
            'Numbers and Counting',
            'Days, Months, and Time',
            'Common Verbs and Actions',
            'Asking for Directions',
            'Food and Eating',
            'Colors and Descriptions',
            'Family and Relationships',
            'Body Parts and Health',
            'Animals and Nature',
            'Expressing Feelings and Emotions',
            'Shopping and Bargaining',
            'Weather and Seasons',
            'Transportation and Travel',
            'Work and Professions',
            'Telling Stories and Narration',
            'Social Interactions and Etiquette',
            'Making Plans and Invitations',
            'Cultural Practices and Traditions',
            'Giving and Receiving Compliments',
          ],
        },
        {
          name: 'Intermediate',
          description: 'More complex sentence structures and conversations',
          lessonRange: { start: 21, end: 60 },
          topics: [
            'Expressing Opinions and Preferences',
            'Health and Illness',
            'Shopping and Clothing',
            'Asking for Help',
            'Hobbies and Free Time',
            'Nature and the Environment',
            'Community and Social Responsibility',
            'Family and Personal Life',
            'Daily Routine and Time Management',
            'Politics and Governance',
            'Talking About Education',
            'Technology and Media',
            'Money and Finance',
            'Travel and Adventure',
            'Environment and Conservation',
            'Literature and Arts',
            'History and Heritage',
            'Ethics and Morality',
            'Philosophy and Critical Thinking',
            'Everyday Conversations and Practice',
            'Advanced Storytelling Techniques',
            'Mastering Complex Sentence Structures',
            'Idiomatic Expressions and Proverbs',
            'Advanced Vocabulary Development',
            'Language for Negotiation and Debate',
            'Discussing Current Events',
            'Participating in Group Discussions',
            'Conversational Fluency Practice',
            'Understanding Cultural References',
            'Preparing for Job Interviews in Kpelle',
            'Giving Presentations in Kpelle',
            'Talking About Personal Achievements',
            'Describing Experiences and Events',
            'Expressing Gratitude and Apologies',
            'Expressing Future Plans and Ambitions',
            'Political Discourse and Debates',
            'Debating Ethical Dilemmas',
            'Understanding Different Accents and Dialects',
            'Discussing Religion and Beliefs',
            'Talking About Future Technology',
          ],
        },
        {
          name: 'Advanced',
          description: 'Advanced topics and fluency development',
          lessonRange: { start: 61, end: 100 },
          topics: [
            'Discussing Social Justice Issues',
            'Language of Business and Economics',
            'Legal Terminology and Practices',
            'Preparing for a Speech or Public Address',
            'Discussing Science and Innovations',
            'Understanding Local Government Systems',
            'Talking About Environmental Challenges',
            'Engaging in Cultural Dialogues',
            'Describing Art and Artistic Movements',
            'Discussing Historical Events',
            'Travel Plans and Accommodation',
            'Understanding Human Rights Issues',
            'Navigating Social Media in Kpelle',
            'Describing Political Leaders and Figures',
            'Talking About Sports and Hobbies',
            'Talking About Dreams and Ambitions',
            'Understanding Personal Finance and Budgeting',
            'Learning the Art of Persuasion',
            'Analyzing News and Media Reports',
            'Discussing the Role of Women in Society',
            'Social and Cultural Etiquette in Different Settings',
            'Giving and Receiving Advice in Kpelle',
            'Understanding Humor and Jokes in Kpelle',
            'Exploring Community Rituals and Celebrations',
            'Environmental Sustainability and Practices',
            'Exploring the Future of Education',
            'Debating International Relations',
            'Discussing Health and Wellness Trends',
            'The Role of Family in Kpelle Society',
            'Analyzing Popular Music and Songs',
            'Understanding Traditional Folklore and Legends',
            'Language for Travel and Exploration',
            'Discussing Technological Advancements',
            'Creating Cultural Projects and Presentations',
            'Advanced Language Proficiency Practice',
            'Talking About Science and Research',
            'Preparing for Exams and Assessments',
            'Developing Listening and Comprehension Skills',
            'Exploring Indigenous Knowledge and Practices',
            'Mastering Public Speaking and Communication',
          ],
        },
      ],
    },
    {
      name: 'Bassa Language',
      description: 'Learn the Bassa language spoken in Liberia',
      imageUrl: '/images/bassa.png',
      levels: [
        {
          name: 'Beginner',
          description: 'Basic vocabulary and phrases',
          lessonRange: { start: 1, end: 20 },
          topics: [
            'Greetings and Basic Phrases',
            'Numbers and Counting',
            'Days, Months, and Time',
            'Common Verbs and Actions',
            'Asking for Directions',
          ],
        },
        {
          name: 'Intermediate',
          description: 'More complex sentence structures and conversations',
          lessonRange: { start: 21, end: 60 },
          topics: [
            'Expressing Opinions and Preferences',
            'Health and Illness',
            'Shopping and Clothing',
          ],
        },
        {
          name: 'Advanced',
          description: 'Advanced topics and fluency development',
          lessonRange: { start: 61, end: 100 },
          topics: [
            'Discussing Social Justice Issues',
            'Language of Business and Economics',
          ],
        },
      ],
    },
    {
      name: 'Vai Language',
      description: 'Learn the Vai language spoken in Liberia and Sierra Leone',
      imageUrl: '/images/vai.png',
      levels: [
        {
          name: 'Beginner',
          description: 'Basic vocabulary and phrases',
          lessonRange: { start: 1, end: 20 },
          topics: [
            'Greetings and Basic Phrases',
            'Numbers and Counting',
            'Days, Months, and Time',
          ],
        },
        {
          name: 'Intermediate',
          description: 'More complex sentence structures and conversations',
          lessonRange: { start: 21, end: 60 },
          topics: ['Expressing Opinions and Preferences', 'Health and Illness'],
        },
        {
          name: 'Advanced',
          description: 'Advanced topics and fluency development',
          lessonRange: { start: 61, end: 100 },
          topics: ['Discussing Social Justice Issues'],
        },
      ],
    },
  ];

  try {
    await Language.deleteMany({});
    const createdLanguages = await Language.insertMany(languages);
    console.log(`${createdLanguages.length} languages seeded`);
    return createdLanguages;
  } catch (err) {
    console.error('Error seeding languages:', err);
    throw err;
  }
};

const seedLessons = async () => {
  try {
    const languages = await Language.find();
    const lessons = [];

    for (const language of languages) {
      for (const level of language.levels) {
        for (let i = level.lessonRange.start; i <= level.lessonRange.end; i++) {
          const lesson = {
            languageId: language._id,
            level: level.name,
            lessonNumber: i,
            title: `Lesson ${i}, Section ${Math.ceil(i / 5)}`,
            subtitle: `${level.topics[i % level.topics.length]} (${level.name})`,
            imageUrl: `/images/${language.name.split(' ')[0].toLowerCase()}_icon_${(i % 3) + 1}.png`,
            progress: 0,
            activities: [
              {
                title: `${language.name.split(' ')[0]} ${level.topics[i % level.topics.length].split(' ')[0]}`,
                type: 'Listening',
                status: i === 1 ? 'open' : 'locked',
                unitProgress: i === 1 ? 0 : 0,
              },
              {
                title: `${language.name.split(' ')[0]} ${level.topics[i % level.topics.length].split(' ')[0]}`,
                type: 'Speaking',
                status: 'locked',
                unitProgress: 0,
              },
              {
                title: `${language.name.split(' ')[0]} ${level.topics[i % level.topics.length].split(' ')[0]}`,
                type: 'Pronunciation',
                status: 'locked',
                unitProgress: 0,
              },
              {
                title: `${language.name.split(' ')[0]} ${level.topics[i % level.topics.length].split(' ')[0]}`,
                type: 'Drag and Drop Games',
                status: 'locked',
                unitProgress: 0,
              },
              {
                title: `${language.name.split(' ')[0]} ${level.topics[i % level.topics.length].split(' ')[0]}`,
                type: 'Quiz',
                status: 'locked',
                unitProgress: 0,
              },
            ],
          };
          lessons.push(lesson);
        }
      }
    }

    await Lesson.deleteMany({});
    const createdLessons = await Lesson.insertMany(lessons);
    console.log(`${createdLessons.length} lessons seeded`);
    return createdLessons;
  } catch (err) {
    console.error('Error seeding lessons:', err);
    throw err;
  }
};

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log('Starting database seeding...');

    // Clear existing collections
    await mongoose.connection.dropDatabase();
    console.log('Database cleared');

    // Seed data
    await seedLanguages();
    await seedLessons();

    console.log('Database seeded successfully!');
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('MongoDB connection closed');
    process.exit(0);
  }
};

// Run the seeder
seedDatabase();
