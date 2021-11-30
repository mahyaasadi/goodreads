import { useParams } from "react-router-dom";
import BookDescription from "./components/BookDescription";
import ReviewsList from "./components/ReviewsList";
import "./style/bookIndex.css";
//book constants
import {
  blindness,
  letterToaChild,
  dariusTheGreat,
  kiterunner,
  persepolis,
  beartown,
  rebecca,
  callMeByYourName,
  theDeathofVivekOji,
  perfume,
  projectHailMary,
  theHobbit,
} from "../../../core/bookConstants";
//user constants
import {
  mahya,
  maede,
  sina,
  saba,
  negar,
  parmida,
  rozi,
} from "../../../core/userConstants";

const Book = () => {
  const books = {
    1: blindness,
    2: letterToaChild,
    3: dariusTheGreat,
    4: kiterunner,
    5: persepolis,
    6: beartown,
    7: rebecca,
    8: callMeByYourName,
    9: theDeathofVivekOji,
    10: perfume,
    11: projectHailMary,
    12: theHobbit,
  };

  const reviewsList = {
    1: [
      {
        reviewerInfo: mahya,
        reviewText:
          "This book is so frightening and so... realistic. Blindness is not an alien concept like monsters and ghosts, neither are contagious diseases. So imagine a disease that prompted sudden blindness; that spread from one person to another quicker than the common cold. This book feels like a story that could happen. One of the main issues readers have with this - if they have any - is the writing style. It's written in huge blocks of text with little punctuation, no quotation marks, and many run-on sentences. It can get a little disorientating, but I guess that's the end of the world for you. I actually found it incredibly effective in creating the air of blind panic that Saramago clearly wanted to impart. People fumbling around in the whiteness, hoping no one around means them harm and being powerless to do anything about it if they did.",
        rating: 4,
      },
      {
        reviewerInfo: negar,
        reviewText:
          "You walk home and notice a discarded knit hat at the foot of a tree; you see the street cleaners’ orange signs tied to tree trunks, lampposts, telephone poles. You see a train run alongside you the color of the silver clouds, of the reflected golden light. You see people, in all their shapes, walk past you, each individual and anonymous. You feel anonymous yourself, and therefore more forgiving, more patient. You think everything is possible. You think everything possible must already exist. You think again of something you already believe: that people read the books that find them. That stories arrive to tell themselves, as relevant as news.",
        rating: 1,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "I finished this masterpiece last week and I let it to sink in a little bit before reviewing it. The power of this book was quite overwhelming at times and I had to stop reading for a few days at a time. I do not think there are many books that disturbed me like this one. Maybe Never Let Me Go but there the message was much more subtle.",
        rating: 5,
      },
    ],
    2: [
      {
        reviewerInfo: parmida,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 3,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 4,
      },
    ],
    3: [
      {
        reviewerInfo: parmida,
        reviewText:
          "if i could give this book a thousand stars, i would. this is now one of my favourite books of all time.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "I will rave about this book. A lot. I have so many good things to say about it that I need to gather my thoughts before I can write a coherent review. This book took my heart by storm. It made me sad and happy and also very hungry.",
        rating: 4,
      },
      {
        reviewerInfo: saba,
        reviewText:
          "So who else read this title and immediately thought “big mood”? also, am I the only one getting so many Ari & Dante vibes from this book??",
        rating: 3,
      },
    ],
    4: [
      {
        reviewerInfo: parmida,
        reviewText:
          "if i could give this book a thousand stars, i would. this is now one of my favourite books of all time.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "I will rave about this book. A lot. I have so many good things to say about it that I need to gather my thoughts before I can write a coherent review. This book took my heart by storm. It made me sad and happy and also very hungry.",
        rating: 4,
      },
      {
        reviewerInfo: saba,
        reviewText:
          "So who else read this title and immediately thought “big mood”? also, am I the only one getting so many Ari & Dante vibes from this book??",
        rating: 3,
      },
    ],
    5: [
      {
        reviewerInfo: parmida,
        reviewText:
          "if i could give this book a thousand stars, i would. this is now one of my favourite books of all time.",
        rating: 4,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "I will rave about this book. A lot. I have so many good things to say about it that I need to gather my thoughts before I can write a coherent review. This book took my heart by storm. It made me sad and happy and also very hungry.",
        rating: 2,
      },
      {
        reviewerInfo: saba,
        reviewText:
          "So who else read this title and immediately thought “big mood”? also, am I the only one getting so many Ari & Dante vibes from this book??",
        rating: 5,
      },
    ],
    6: [
      {
        reviewerInfo: rozi,
        reviewText:
          "This book is so frightening and so... realistic. Blindness is not an alien concept like monsters and ghosts, neither are contagious diseases. So imagine a disease that prompted sudden blindness; that spread from one person to another quicker than the common cold. This book feels like a story that could happen. One of the main issues readers have with this - if they have any - is the writing style. It's written in huge blocks of text with little punctuation, no quotation marks, and many run-on sentences. It can get a little disorientating, but I guess that's the end of the world for you. I actually found it incredibly effective in creating the air of blind panic that Saramago clearly wanted to impart. People fumbling around in the whiteness, hoping no one around means them harm and being powerless to do anything about it if they did.",
        rating: 4,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "I finished this masterpiece last week and I let it to sink in a little bit before reviewing it. The power of this book was quite overwhelming at times and I had to stop reading for a few days at a time. I do not think there are many books that disturbed me like this one. Maybe Never Let Me Go but there the message was much more subtle.",
        rating: 5,
      },
    ],
    7: [
      {
        reviewerInfo: saba,
        reviewText:
          "You walk home and notice a discarded knit hat at the foot of a tree; you see the street cleaners’ orange signs tied to tree trunks, lampposts, telephone poles. You see a train run alongside you the color of the silver clouds, of the reflected golden light. You see people, in all their shapes, walk past you, each individual and anonymous. You feel anonymous yourself, and therefore more forgiving, more patient. You think everything is possible. You think everything possible must already exist. You think again of something you already believe: that people read the books that find them. That stories arrive to tell themselves, as relevant as news.",
        rating: 1,
      },
      {
        reviewerInfo: mahya,
        reviewText:
          "I finished this masterpiece last week and I let it to sink in a little bit before reviewing it. The power of this book was quite overwhelming at times and I had to stop reading for a few days at a time. I do not think there are many books that disturbed me like this one. Maybe Never Let Me Go but there the message was much more subtle.",
        rating: 5,
      },
    ],
    8: [
      {
        reviewerInfo: saba,
        reviewText:
          "You walk home and notice a discarded knit hat at the foot of a tree; you see the street cleaners’ orange signs tied to tree trunks, lampposts, telephone poles. You see a train run alongside you the color of the silver clouds, of the reflected golden light. You see people, in all their shapes, walk past you, each individual and anonymous. You feel anonymous yourself, and therefore more forgiving, more patient. You think everything is possible. You think everything possible must already exist. You think again of something you already believe: that people read the books that find them. That stories arrive to tell themselves, as relevant as news.",
        rating: 1,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "I finished this masterpiece last week and I let it to sink in a little bit before reviewing it. The power of this book was quite overwhelming at times and I had to stop reading for a few days at a time. I do not think there are many books that disturbed me like this one. Maybe Never Let Me Go but there the message was much more subtle.",
        rating: 5,
      },
    ],
    9: [
      {
        reviewerInfo: parmida,
        reviewText:
          "if i could give this book a thousand stars, i would. this is now one of my favourite books of all time.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "I will rave about this book. A lot. I have so many good things to say about it that I need to gather my thoughts before I can write a coherent review. This book took my heart by storm. It made me sad and happy and also very hungry.",
        rating: 4,
      },
    ],
    10: [
      {
        reviewerInfo: mahya,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 3,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 5,
      },
      {
        reviewerInfo: parmida,
        reviewText: "Nope.",
        rating: 1,
      },
    ],
    11: [
      {
        reviewerInfo: mahya,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 3,
      },
      {
        reviewerInfo: maede,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 4,
      },
      {
        reviewerInfo: parmida,
        reviewText: "Nope.",
        rating: 1,
      },
    ],
    12: [
      {
        reviewerInfo: maede,
        reviewText:
          "Oriana Fallaci writes with a poetic flair, fearlessly lending her voice to many questions which nearly all of us (specially women) battle with in solitude over a lifetime, but are often unable to articulate these ideas in front of an audience in fear of backlash by a predominantly conservative society. The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 5,
      },
      {
        reviewerInfo: sina,
        reviewText:
          "The central ideas are presented in the form of a young woman's internal monologue, in which she confronts her own fears, doubts, misgivings and suppressed anger while pretending to converse with her unborn child.",
        rating: 4,
      },
      {
        reviewerInfo: parmida,
        reviewText: "Nope.",
        rating: 1,
      },
    ],
  };

  const { id } = useParams();

  return (
    <div className="flex justify-center book-page">
      <div className="w-1/2">
        <div className="pt-24">
          <BookDescription book={books[id]} />
        </div>
        <div>
          <ReviewsList reviews={reviewsList[id]} />
        </div>
      </div>
    </div>
  );
};

export default Book;
