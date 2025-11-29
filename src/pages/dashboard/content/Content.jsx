import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";

import Modal from "./components/Modals/Modal"; // ADD Modal ONLY
import EditThemeModal from "./components/Modals/EditThemeModal"; // EDIT Modal
import Details from "./components/Modals/Details"; // Details Modal

import Table from "./components/Table";
import SearchBar from "./components/Modals/SearchBar";
import Header from "./components/Modals/Header";

import DeleteModal from "./components/Modals/DeleteModal";

// All Data for Different Tabs
const allData = {
  themes: [
    {
      id: 1,
      name: "French History",
      questions: 125,
      status: "Published",
      lastUpdated: "2024-01-15",
    },
    {
      id: 2,
      name: "Geography",
      questions: 98,
      status: "Published",
      lastUpdated: "2024-01-15",
    },
    {
      id: 3,
      name: "Forest River",
      questions: 87,
      status: "Published",
      lastUpdated: "2024-01-15",
    },
    {
      id: 4,
      name: "Nightmare",
      questions: 65,
      status: "Published",
      lastUpdated: "2024-01-15",
    },
    {
      id: 5,
      name: "Moon Fair",
      questions: 78,
      status: "Published",
      lastUpdated: "2024-01-15",
    },
    {
      id: 7,
      name: "Live French",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    {
      id: 8,
      name: "Spanish Culture",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    {
      id: 9,
      name: "World War II",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    {
      id: 10,
      name: "Ancient Rome",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    {
      id: 11,
      name: "Renaissance Art",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    {
      id: 12,
      name: "Modern Physics",
      questions: 25,
      status: "Draft",
      lastUpdated: "2024-01-15",
    },
    // additional dummy themes to reach 60 total
    {
      id: 13,
      name: "Theme 13",
      questions: 21,
      status: "Published",
      lastUpdated: "2025-01-10",
    },
    {
      id: 14,
      name: "Theme 14",
      questions: 34,
      status: "Draft",
      lastUpdated: "2025-01-11",
    },
    {
      id: 15,
      name: "Theme 15",
      questions: 7,
      status: "Published",
      lastUpdated: "2025-01-12",
    },
    {
      id: 16,
      name: "Theme 16",
      questions: 13,
      status: "Published",
      lastUpdated: "2025-01-13",
    },
    {
      id: 17,
      name: "Theme 17",
      questions: 44,
      status: "Draft",
      lastUpdated: "2025-01-14",
    },
    {
      id: 18,
      name: "Theme 18",
      questions: 29,
      status: "Published",
      lastUpdated: "2025-01-15",
    },
    {
      id: 19,
      name: "Theme 19",
      questions: 18,
      status: "Published",
      lastUpdated: "2025-01-16",
    },
    {
      id: 20,
      name: "Theme 20",
      questions: 52,
      status: "Published",
      lastUpdated: "2025-01-17",
    },
    {
      id: 21,
      name: "Theme 21",
      questions: 9,
      status: "Draft",
      lastUpdated: "2025-01-18",
    },
    {
      id: 22,
      name: "Theme 22",
      questions: 61,
      status: "Published",
      lastUpdated: "2025-01-19",
    },
    {
      id: 23,
      name: "Theme 23",
      questions: 27,
      status: "Draft",
      lastUpdated: "2025-01-20",
    },
    {
      id: 24,
      name: "Theme 24",
      questions: 33,
      status: "Published",
      lastUpdated: "2025-01-21",
    },
    {
      id: 25,
      name: "Theme 25",
      questions: 41,
      status: "Published",
      lastUpdated: "2025-01-22",
    },
    {
      id: 26,
      name: "Theme 26",
      questions: 12,
      status: "Draft",
      lastUpdated: "2025-01-23",
    },
    {
      id: 27,
      name: "Theme 27",
      questions: 22,
      status: "Published",
      lastUpdated: "2025-01-24",
    },
    {
      id: 28,
      name: "Theme 28",
      questions: 37,
      status: "Published",
      lastUpdated: "2025-01-25",
    },
    {
      id: 29,
      name: "Theme 29",
      questions: 46,
      status: "Draft",
      lastUpdated: "2025-01-26",
    },
    {
      id: 30,
      name: "Theme 30",
      questions: 15,
      status: "Published",
      lastUpdated: "2025-01-27",
    },
    {
      id: 31,
      name: "Theme 31",
      questions: 5,
      status: "Published",
      lastUpdated: "2025-01-28",
    },
    {
      id: 32,
      name: "Theme 32",
      questions: 28,
      status: "Draft",
      lastUpdated: "2025-01-29",
    },
    {
      id: 33,
      name: "Theme 33",
      questions: 39,
      status: "Published",
      lastUpdated: "2025-01-30",
    },
    {
      id: 34,
      name: "Theme 34",
      questions: 51,
      status: "Published",
      lastUpdated: "2025-02-01",
    },
    {
      id: 35,
      name: "Theme 35",
      questions: 24,
      status: "Draft",
      lastUpdated: "2025-02-02",
    },
    {
      id: 36,
      name: "Theme 36",
      questions: 60,
      status: "Published",
      lastUpdated: "2025-02-03",
    },
    {
      id: 37,
      name: "Theme 37",
      questions: 16,
      status: "Published",
      lastUpdated: "2025-02-04",
    },
    {
      id: 38,
      name: "Theme 38",
      questions: 36,
      status: "Draft",
      lastUpdated: "2025-02-05",
    },
    {
      id: 39,
      name: "Theme 39",
      questions: 42,
      status: "Published",
      lastUpdated: "2025-02-06",
    },
    {
      id: 40,
      name: "Theme 40",
      questions: 30,
      status: "Published",
      lastUpdated: "2025-02-07",
    },
    {
      id: 41,
      name: "Theme 41",
      questions: 20,
      status: "Draft",
      lastUpdated: "2025-02-08",
    },
    {
      id: 42,
      name: "Theme 42",
      questions: 55,
      status: "Published",
      lastUpdated: "2025-02-09",
    },
    {
      id: 43,
      name: "Theme 43",
      questions: 48,
      status: "Published",
      lastUpdated: "2025-02-10",
    },
    {
      id: 44,
      name: "Theme 44",
      questions: 11,
      status: "Draft",
      lastUpdated: "2025-02-11",
    },
    {
      id: 45,
      name: "Theme 45",
      questions: 26,
      status: "Published",
      lastUpdated: "2025-02-12",
    },
    {
      id: 46,
      name: "Theme 46",
      questions: 38,
      status: "Published",
      lastUpdated: "2025-02-13",
    },
    {
      id: 47,
      name: "Theme 47",
      questions: 47,
      status: "Draft",
      lastUpdated: "2025-02-14",
    },
    {
      id: 48,
      name: "Theme 48",
      questions: 31,
      status: "Published",
      lastUpdated: "2025-02-15",
    },
    {
      id: 49,
      name: "Theme 49",
      questions: 14,
      status: "Published",
      lastUpdated: "2025-02-16",
    },
    {
      id: 50,
      name: "Theme 50",
      questions: 19,
      status: "Draft",
      lastUpdated: "2025-02-17",
    },
    {
      id: 51,
      name: "Theme 51",
      questions: 43,
      status: "Published",
      lastUpdated: "2025-02-18",
    },
    {
      id: 52,
      name: "Theme 52",
      questions: 35,
      status: "Published",
      lastUpdated: "2025-02-19",
    },
    {
      id: 53,
      name: "Theme 53",
      questions: 49,
      status: "Draft",
      lastUpdated: "2025-02-20",
    },
    {
      id: 54,
      name: "Theme 54",
      questions: 17,
      status: "Published",
      lastUpdated: "2025-02-21",
    },
    {
      id: 55,
      name: "Theme 55",
      questions: 32,
      status: "Published",
      lastUpdated: "2025-02-22",
    },
    {
      id: 56,
      name: "Theme 56",
      questions: 58,
      status: "Draft",
      lastUpdated: "2025-02-23",
    },
    {
      id: 57,
      name: "Theme 57",
      questions: 6,
      status: "Published",
      lastUpdated: "2025-02-24",
    },
    {
      id: 58,
      name: "Theme 58",
      questions: 23,
      status: "Published",
      lastUpdated: "2025-02-25",
    },
    {
      id: 59,
      name: "Theme 59",
      questions: 40,
      status: "Draft",
      lastUpdated: "2025-02-26",
    },
    {
      id: 60,
      name: "Theme 60",
      questions: 29,
      status: "Published",
      lastUpdated: "2025-02-27",
    },
  ],
  lesson: [
    {
      id: 1,
      LessonName: "Introduction to French",
      ThemeName: "French History",
      questions: 45,
      status: "Published",
      lastUpdated: "2024-01-20",
    },
    {
      id: 2,
      LessonName: "Geography Basics",
      ThemeName: "Geography",
      questions: 32,
      status: "Published",
      lastUpdated: "2024-01-18",
    },
    {
      id: 3,
      LessonName: "Advanced Grammar",
      ThemeName: "French History",
      questions: 56,
      status: "Draft",
      lastUpdated: "2024-01-22",
    },
    {
      id: 4,
      LessonName: "Vocabulary Building",
      ThemeName: "Spanish Culture",
      questions: 67,
      status: "Published",
      lastUpdated: "2024-01-19",
    },
    // additional dummy lessons to reach 60 total
    {
      id: 5,
      LessonName: "Lesson 5",
      ThemeName: "Theme 5",
      questions: 12,
      status: "Published",
      lastUpdated: "2025-02-01",
    },
    {
      id: 6,
      LessonName: "Lesson 6",
      ThemeName: "Theme 6",
      questions: 18,
      status: "Draft",
      lastUpdated: "2025-02-02",
    },
    {
      id: 7,
      LessonName: "Lesson 7",
      ThemeName: "Theme 7",
      questions: 10,
      status: "Published",
      lastUpdated: "2025-02-03",
    },
    {
      id: 8,
      LessonName: "Lesson 8",
      ThemeName: "Theme 8",
      questions: 20,
      status: "Published",
      lastUpdated: "2025-02-04",
    },
    {
      id: 9,
      LessonName: "Lesson 9",
      ThemeName: "Theme 9",
      questions: 22,
      status: "Draft",
      lastUpdated: "2025-02-05",
    },
    {
      id: 10,
      LessonName: "Lesson 10",
      ThemeName: "Theme 10",
      questions: 30,
      status: "Published",
      lastUpdated: "2025-02-06",
    },
    {
      id: 11,
      LessonName: "Lesson 11",
      ThemeName: "Theme 11",
      questions: 14,
      status: "Published",
      lastUpdated: "2025-02-07",
    },
    {
      id: 12,
      LessonName: "Lesson 12",
      ThemeName: "Theme 12",
      questions: 28,
      status: "Draft",
      lastUpdated: "2025-02-08",
    },
    {
      id: 13,
      LessonName: "Lesson 13",
      ThemeName: "Theme 13",
      questions: 9,
      status: "Published",
      lastUpdated: "2025-02-09",
    },
    {
      id: 14,
      LessonName: "Lesson 14",
      ThemeName: "Theme 14",
      questions: 16,
      status: "Published",
      lastUpdated: "2025-02-10",
    },
    {
      id: 15,
      LessonName: "Lesson 15",
      ThemeName: "Theme 15",
      questions: 19,
      status: "Draft",
      lastUpdated: "2025-02-11",
    },
    {
      id: 16,
      LessonName: "Lesson 16",
      ThemeName: "Theme 16",
      questions: 26,
      status: "Published",
      lastUpdated: "2025-02-12",
    },
    {
      id: 17,
      LessonName: "Lesson 17",
      ThemeName: "Theme 17",
      questions: 11,
      status: "Published",
      lastUpdated: "2025-02-13",
    },
    {
      id: 18,
      LessonName: "Lesson 18",
      ThemeName: "Theme 18",
      questions: 21,
      status: "Draft",
      lastUpdated: "2025-02-14",
    },
    {
      id: 19,
      LessonName: "Lesson 19",
      ThemeName: "Theme 19",
      questions: 24,
      status: "Published",
      lastUpdated: "2025-02-15",
    },
    {
      id: 20,
      LessonName: "Lesson 20",
      ThemeName: "Theme 20",
      questions: 13,
      status: "Published",
      lastUpdated: "2025-02-16",
    },
    {
      id: 21,
      LessonName: "Lesson 21",
      ThemeName: "Theme 21",
      questions: 15,
      status: "Draft",
      lastUpdated: "2025-02-17",
    },
    {
      id: 22,
      LessonName: "Lesson 22",
      ThemeName: "Theme 22",
      questions: 29,
      status: "Published",
      lastUpdated: "2025-02-18",
    },
    {
      id: 23,
      LessonName: "Lesson 23",
      ThemeName: "Theme 23",
      questions: 7,
      status: "Published",
      lastUpdated: "2025-02-19",
    },
    {
      id: 24,
      LessonName: "Lesson 24",
      ThemeName: "Theme 24",
      questions: 32,
      status: "Draft",
      lastUpdated: "2025-02-20",
    },
  ],
  questions: [
    {
      id: 101,
      question: "What is the capital of France?",
      theme: "French History",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 102,
      question: "Name the largest desert in the world.",
      theme: "Geography Basics",
      difficulty: "Medium",
      status: "Draft",
    },
    {
      id: 103,
      question: "Who founded Rome according to mythology?",
      theme: "Ancient Rome",
      difficulty: "Hard",
      status: "Published",
    },
    // additional dummy questions to reach 60+ questions
    {
      id: 104,
      question: "Which river runs through Paris?",
      theme: "French History",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 105,
      question: "What language is primarily spoken in Spain?",
      theme: "Spanish Culture",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 106,
      question: "What is the capital of Italy?",
      theme: "Ancient Rome",
      difficulty: "Easy",
      status: "Draft",
    },
    {
      id: 107,
      question: "Name a famous French painter.",
      theme: "Renaissance Art",
      difficulty: "Medium",
      status: "Published",
    },
    {
      id: 108,
      question: "What is the largest ocean on Earth?",
      theme: "Geography Basics",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 109,
      question: "How many planets are in our solar system?",
      theme: "Modern Physics",
      difficulty: "Medium",
      status: "Draft",
    },
    {
      id: 110,
      question: "When did World War II end?",
      theme: "World War II",
      difficulty: "Medium",
      status: "Published",
    },
    {
      id: 111,
      question: "Who was Julius Caesar?",
      theme: "Ancient Rome",
      difficulty: "Hard",
      status: "Published",
    },
    {
      id: 112,
      question: "What is a falcon?",
      theme: "Forest River",
      difficulty: "Easy",
      status: "Draft",
    },
    {
      id: 113,
      question: "What are primary colors?",
      theme: "Renaissance Art",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 114,
      question: "Name a famous Spanish writer.",
      theme: "Spanish Culture",
      difficulty: "Medium",
      status: "Published",
    },
    {
      id: 115,
      question: "What is a peninsula?",
      theme: "Geography Basics",
      difficulty: "Medium",
      status: "Draft",
    },
    {
      id: 116,
      question: "Who invented the light bulb?",
      theme: "Modern Physics",
      difficulty: "Hard",
      status: "Published",
    },
    {
      id: 117,
      question: "What is the Eiffel Tower made of?",
      theme: "French History",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 118,
      question: "Which mountain is highest in the world?",
      theme: "Geography Basics",
      difficulty: "Hard",
      status: "Published",
    },
    {
      id: 119,
      question: "What is the capital of Spain?",
      theme: "Spanish Culture",
      difficulty: "Easy",
      status: "Draft",
    },
    {
      id: 120,
      question: "What is the currency in France?",
      theme: "French History",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 121,
      question: "Which instrument is used to measure earthquakes?",
      theme: "Modern Physics",
      difficulty: "Medium",
      status: "Published",
    },
    {
      id: 122,
      question: "Name the longest river in the world.",
      theme: "Geography Basics",
      difficulty: "Medium",
      status: "Draft",
    },
    {
      id: 123,
      question: "Who painted the Mona Lisa?",
      theme: "Renaissance Art",
      difficulty: "Easy",
      status: "Published",
    },
    {
      id: 124,
      question: "What was the Renaissance about?",
      theme: "Renaissance Art",
      difficulty: "Medium",
      status: "Published",
    },
  ],
  revisionSheets: [
    {
      id: 1,
      theme: "French History",
      questions: 50,
      mistakes: 8,
      created: "2025-01-05",
      status: "Published",
    },
    {
      id: 2,
      theme: "Geography Basics",
      questions: 40,
      mistakes: 5,
      created: "2025-01-06",
      status: "Draft",
    },
    {
      id: 3,
      theme: "Ancient Rome",
      questions: 62,
      mistakes: 10,
      created: "2025-01-07",
      status: "Published",
    },
    // extra revision sheets to reach 60+
    {
      id: 4,
      theme: "Theme 4",
      questions: 20,
      mistakes: 2,
      created: "2025-01-08",
      status: "Draft",
    },
    {
      id: 5,
      theme: "Theme 5",
      questions: 35,
      mistakes: 4,
      created: "2025-01-09",
      status: "Published",
    },
    {
      id: 6,
      theme: "Theme 6",
      questions: 18,
      mistakes: 3,
      created: "2025-01-10",
      status: "Published",
    },
    {
      id: 7,
      theme: "Theme 7",
      questions: 42,
      mistakes: 9,
      created: "2025-01-11",
      status: "Draft",
    },
    {
      id: 8,
      theme: "Theme 8",
      questions: 27,
      mistakes: 1,
      created: "2025-01-12",
      status: "Published",
    },
    {
      id: 9,
      theme: "Theme 9",
      questions: 31,
      mistakes: 6,
      created: "2025-01-13",
      status: "Published",
    },
    {
      id: 10,
      theme: "Theme 10",
      questions: 12,
      mistakes: 0,
      created: "2025-01-14",
      status: "Draft",
    },
    {
      id: 11,
      theme: "Theme 11",
      questions: 22,
      mistakes: 5,
      created: "2025-01-15",
      status: "Published",
    },
    {
      id: 12,
      theme: "Theme 12",
      questions: 50,
      mistakes: 12,
      created: "2025-01-16",
      status: "Published",
    },
    {
      id: 13,
      theme: "Theme 13",
      questions: 17,
      mistakes: 3,
      created: "2025-01-17",
      status: "Draft",
    },
    {
      id: 14,
      theme: "Theme 14",
      questions: 29,
      mistakes: 4,
      created: "2025-01-18",
      status: "Published",
    },
    {
      id: 15,
      theme: "Theme 15",
      questions: 24,
      mistakes: 2,
      created: "2025-01-19",
      status: "Published",
    },
    {
      id: 16,
      theme: "Theme 16",
      questions: 34,
      mistakes: 7,
      created: "2025-01-20",
      status: "Draft",
    },
    {
      id: 17,
      theme: "Theme 17",
      questions: 28,
      mistakes: 1,
      created: "2025-01-21",
      status: "Published",
    },
    {
      id: 18,
      theme: "Theme 18",
      questions: 19,
      mistakes: 0,
      created: "2025-01-22",
      status: "Published",
    },
    {
      id: 19,
      theme: "Theme 19",
      questions: 33,
      mistakes: 8,
      created: "2025-01-23",
      status: "Draft",
    },
    {
      id: 20,
      theme: "Theme 20",
      questions: 41,
      mistakes: 10,
      created: "2025-01-24",
      status: "Published",
    },
    {
      id: 21,
      theme: "Theme 21",
      questions: 14,
      mistakes: 2,
      created: "2025-01-25",
      status: "Published",
    },
    {
      id: 22,
      theme: "Theme 22",
      questions: 26,
      mistakes: 6,
      created: "2025-01-26",
      status: "Draft",
    },
    {
      id: 23,
      theme: "Theme 23",
      questions: 37,
      mistakes: 9,
      created: "2025-01-27",
      status: "Published",
    },
    {
      id: 24,
      theme: "Theme 24",
      questions: 18,
      mistakes: 3,
      created: "2025-01-28",
      status: "Published",
    },
  ],
  mockExams: [
    {
      id: 1,
      theme: "French History",
      questions: 100,
      completions: 230,
      created: "2025-01-02",
      status: "Published",
    },
    {
      id: 2,
      theme: "Geography Basics",
      questions: 75,
      completions: 180,
      created: "2025-01-04",
      status: "Draft",
    },
    {
      id: 3,
      theme: "Ancient Rome",
      questions: 90,
      completions: 310,
      created: "2025-01-03",
      status: "Published",
    },
    // extra mock exams to reach 60+ items
    {
      id: 4,
      theme: "Theme 4",
      questions: 45,
      completions: 120,
      created: "2025-01-05",
      status: "Draft",
    },
    {
      id: 5,
      theme: "Theme 5",
      questions: 60,
      completions: 240,
      created: "2025-01-06",
      status: "Published",
    },
    {
      id: 6,
      theme: "Theme 6",
      questions: 30,
      completions: 80,
      created: "2025-01-07",
      status: "Published",
    },
    {
      id: 7,
      theme: "Theme 7",
      questions: 50,
      completions: 95,
      created: "2025-01-08",
      status: "Draft",
    },
    {
      id: 8,
      theme: "Theme 8",
      questions: 40,
      completions: 110,
      created: "2025-01-09",
      status: "Published",
    },
    {
      id: 9,
      theme: "Theme 9",
      questions: 55,
      completions: 130,
      created: "2025-01-10",
      status: "Published",
    },
    {
      id: 10,
      theme: "Theme 10",
      questions: 70,
      completions: 210,
      created: "2025-01-11",
      status: "Draft",
    },
    {
      id: 11,
      theme: "Theme 11",
      questions: 25,
      completions: 40,
      created: "2025-01-12",
      status: "Published",
    },
    {
      id: 12,
      theme: "Theme 12",
      questions: 80,
      completions: 350,
      created: "2025-01-13",
      status: "Published",
    },
    {
      id: 13,
      theme: "Theme 13",
      questions: 35,
      completions: 75,
      created: "2025-01-14",
      status: "Draft",
    },
    {
      id: 14,
      theme: "Theme 14",
      questions: 48,
      completions: 150,
      created: "2025-01-15",
      status: "Published",
    },
    {
      id: 15,
      theme: "Theme 15",
      questions: 52,
      completions: 210,
      created: "2025-01-16",
      status: "Published",
    },
    {
      id: 16,
      theme: "Theme 16",
      questions: 30,
      completions: 65,
      created: "2025-01-17",
      status: "Draft",
    },
    {
      id: 17,
      theme: "Theme 17",
      questions: 60,
      completions: 220,
      created: "2025-01-18",
      status: "Published",
    },
    {
      id: 18,
      theme: "Theme 18",
      questions: 44,
      completions: 140,
      created: "2025-01-19",
      status: "Published",
    },
    {
      id: 19,
      theme: "Theme 19",
      questions: 29,
      completions: 78,
      created: "2025-01-20",
      status: "Draft",
    },
    {
      id: 20,
      theme: "Theme 20",
      questions: 66,
      completions: 258,
      created: "2025-01-21",
      status: "Published",
    },
    {
      id: 21,
      theme: "Theme 21",
      questions: 15,
      completions: 28,
      created: "2025-01-22",
      status: "Published",
    },
    {
      id: 22,
      theme: "Theme 22",
      questions: 37,
      completions: 91,
      created: "2025-01-23",
      status: "Draft",
    },
    {
      id: 23,
      theme: "Theme 23",
      questions: 49,
      completions: 178,
      created: "2025-01-24",
      status: "Published",
    },

    {
      id: 24,
      theme: "Theme 23",
      questions: 49,
      completions: 178,
      created: "2025-01-24",
      status: "Published",
    },
  ],
};

export default function Content() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false); // ADD MODAL STATES
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // EDIT MODAL STATES
  const [isDetailsOpen, setIsDetailsOpen] = useState(false); // DETAILS MODAL STATES
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  // Detect active tab
  const getActiveTabFromPath = (pathname) => {
    if (pathname.includes("/themes")) return "Themes";
    if (pathname.includes("/lesson")) return "Lesson";
    if (pathname.includes("/questions")) return "Questions";
    if (pathname.includes("/revision-sheets")) return "Revision Sheets";
    if (pathname.includes("/mock-exams")) return "Mock Exams";
    return "Themes";
  };
  const activeTab = getActiveTabFromPath(location.pathname);
  const themeshea = ["Name", "Questions", "Status", "Last Updated", "Actions"];
  const lessonhea = [
    "Lesson Name",
    "Theme Name",
    "Questions",
    "Status",
    "Last Updated",
    "Actions",
  ];
  const questionhea = [
    "ID",
    "Questions",
    "Theme",
    "Difficulty",
    "Status",
    "Actions",
  ];
  const revisionshea = ["Theme", "Questions", "Mistakes", "Created", "Status"];
  const mockexamhea = [
    "Theme",
    "Questions",
    "Completions",
    "Created",
    "Status",
    "Actions",
  ];

  const getCurrentData = () => {
    switch (activeTab) {
      case "Themes":
        return allData.themes;
      case "Lesson":
        return allData.lesson;
      case "Questions":
        return allData.questions;
      case "Revision Sheets":
        return allData.revisionSheets;
      case "Mock Exams":
        return allData.mockExams;
      default:
        return allData.themes;
    }
  };

  const currentData = getCurrentData();
  // redirect
  useEffect(() => {
    if (location.pathname === "/content" || location.pathname === "/content/") {
      navigate("/content/themes", { replace: true });
    }
  }, [location.pathname, navigate]);
  // Reset UI on tab change
  useEffect(() => {
    setSelectedItems([]);
    setSearchQuery("");
    setCurrentPage(1);
    setIsAddModalOpen(false);
    setIsEditModalOpen(false);
    setIsDetailsOpen(false);

    setEditingItem(null);
  }, [activeTab]);

  // OPEN ADD MODAL
  const handleOpenAddModal = () => {
    setEditingItem(null);
    setIsAddModalOpen(true);
  };

  // CLOSE ADD MODAL
  const handleCloseAdd = () => {
    setIsAddModalOpen(false);
  };

  // OPEN EDIT MODAL
  const handleEditThemeOpen = (id) => {
    setEditingItem(id);
    setIsEditModalOpen(true);
  };

  // CLOSE EDIT MODAL
  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    setEditingItem(null);
  };

  // OPEN DETAILS MODAL
  const handleDetailsOpen = (id) => {
    setEditingItem(id);
    setIsDetailsOpen(true);
  };

  // CLOSE DETAILS MODAL
  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setEditingItem(null);
  };


const handleDeleteOpen = (id) => {
  console.log("Delete", id);

  setIsDeleteOpen(true);
  
};




  // Select logic
  const toggleSelectItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const toggleSelectAll = () => {
    if (selectedItems.length === filteredData.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(filteredData.map((item) => item.id));
    }

  };

  /*** ========== FILTER DATA ========== ***/
  const filteredData = currentData.filter((item) => {
    const searchTerm = searchQuery.toLowerCase();

    if (activeTab === "Lesson") {
      return (
        item.LessonName?.toLowerCase().includes(searchTerm) ||
        item.ThemeName?.toLowerCase().includes(searchTerm)
      );
    }

    if (activeTab === "Questions") {
      return (
        item.question?.toLowerCase().includes(searchTerm) ||
        item.theme?.toLowerCase().includes(searchTerm) ||
        item.difficulty?.toLowerCase().includes(searchTerm) ||
        item.id?.toString().includes(searchTerm)
      );
    }

    if (activeTab === "Revision Sheets") {
      return (
        item.theme?.toLowerCase().includes(searchTerm) ||
        item.created?.toLowerCase().includes(searchTerm) ||
        item.id?.toString().includes(searchTerm)
      );
    }

    if (activeTab === "Mock Exams") {
      return (
        item.theme?.toLowerCase().includes(searchTerm) ||
        item.created?.toLowerCase().includes(searchTerm) ||
        item.completions?.toString().includes(searchTerm)
      );
    }

    return item.name?.toLowerCase().includes(searchTerm);
  });

  const getStatusBadge = (status) => {
    let colorClass = "";
    if (status === "Published") colorClass = "bg-blue-600 text-white";
    else if (status === "Draft") colorClass = "bg-red-100 text-red-700";

    return (
      <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
      >
        {status}
      </span>
    );
  };

  return (
    <div className="h-full w-full flex flex-col font-sans scroll-smooth">
      <Header />

      <main className="flex-1 py-6  ">
        <div className="bg-white rounded-xl border border-[#F6B0B5] px-3 md:px-8 pb-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-[#5F0006] pt-2 my-2">
              {activeTab}
            </h2>

            <button
              onClick={handleOpenAddModal}
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E1000F] to-[#3333A7] text-white px-4  md:px-4 py-3 my-2 md:py-3.5 rounded-lg"
            >
              <Plus size={16} />
              Add {activeTab === "Lesson" ? "Lesson" : activeTab.slice(0, -1)}
            </button>
          </div>

          <SearchBar
            activeTab={activeTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          <Table
            tableeader={
              activeTab === "Themes"
                ? themeshea
                : activeTab === "Lesson"
                ? lessonhea
                : activeTab === "Questions"
                ? questionhea
                : activeTab === "Revision Sheets"
                ? revisionshea
                : mockexamhea
            }
            activeTab={activeTab}
            filteredData={filteredData}
            getStatusBadge={getStatusBadge}
            selectedItems={selectedItems}
            toggleSelectAll={toggleSelectAll}
            toggleSelectItem={toggleSelectItem}
            handleEditThemeOpen={handleEditThemeOpen}
            handleDetailsOpen={handleDetailsOpen}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            handleDeleteOpen={handleDeleteOpen}
          />

        
        </div>
      </main>

      {/* ADD Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={handleCloseAdd}
        activeTab={activeTab}
      />

      {/* EDIT Modal */}
      <EditThemeModal
        isOpen={isEditModalOpen}
        onClose={handleCloseEdit}
        editingItem={editingItem}
        activeTab={activeTab}
      />

      {/* DETAILS Modal */}
      <Details
       isOpen={isDetailsOpen}
  onClose={handleCloseDetails}
  lessonData={
    editingItem ? filteredData.find((d) => d.id === editingItem) : null
  }
      />


<DeleteModal
 isOpen={isDeleteOpen}

  onClose={()=> setIsDeleteOpen(false)}

/>
    </div>
  );
}
