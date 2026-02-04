
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { fetchJsonFromStorage, getStorageUrl } from '../utils/storageLoader';
import FirebaseMedia from './FirebaseMedia';

// --- Styled Components (Dark Mode) ---

const Container = styled.div`
  background-color: #000;
  min-height: 100vh;
  color: #fff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 935px; /* Instagram web max width */
  padding: 30px 20px 0;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 736px) {
    padding: 0;
    width: 100%;
  }
`;

// --- Profile Header ---

const ProfileHeader = styled.header`
  display: flex;
  margin-bottom: 20px;
  align-items: center; /* Vertically center content with profile pic */
  
  @media (max-width: 736px) {
    padding: 14px;
    margin-bottom: 0;
    border-bottom: 1px solid #262626;
  }
`;

const ProfilePicContainer = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 30px;
  display: flex;
  justify-content: center;
  
  @media (max-width: 736px) {
    flex-grow: 0;
    margin-right: 20px;
  }
`;

const ProfileImage = styled(FirebaseMedia)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #363636;
  
  @media (max-width: 736px) {
    width: 77px;
    height: 77px;
  }
`;

const ProfileInfo = styled.section`
  flex-grow: 2;
  flex-basis: 30px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Ensure content is centered if height matches image */
  
   @media (max-width: 736px) {
     flex-grow: 1;
   }
`;

const UsernameRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  flex-wrap: wrap;
  gap: 20px;
  
  h2 {
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    margin: 0;
  }
`;

const StatsRow = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0 0 12px;
  font-size: 14px;
  
  li {
    margin-right: 20px;
  }
  
  strong {
    font-weight: 600;
  }
  
  @media (max-width: 736px) {
     display: none;
  }
`;

const NameSection = styled.div`
  font-size: 14px;
  margin-bottom: 12px;
  
  h1 {
    font-weight: 400;
    font-size: 14px;
    margin: 0;
  }
`;

const BioSection = styled.div`
  font-size: 14px;
  white-space: normal;
  line-height: 18px;
  color: #fff;
`;

// --- Navigation Tabs ---

const TabsContainer = styled.div`
  border-top: 1px solid #262626;
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 5px; /* small gap before grid */
  
  @media (max-width: 736px) {
    gap: 20px;
    justify-content: space-around;
  }
`;

const TabItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 52px;
  cursor: pointer;
  color: ${props => props.$active ? '#fff' : '#8e8e8e'};
  border-top: 1px solid ${props => props.$active ? '#fff' : 'transparent'};
  margin-top: -1px; /* Overlap border */
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  
  &:hover {
    color: #fff;
  }
  
  span {
    display: block;
  }
  
  @media (max-width: 736px) {
     span { display: none; } /* often hide text on mobile or just show icons */
  }
`;

// SVG Icons
const GridIcon = () => (
  <svg aria-label="" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
    <rect fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="3"></rect>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="9.015" x2="9.015" y1="3" y2="21"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="14.985" x2="14.985" y1="3" y2="21"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="9.015" y2="9.015"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14.985" y2="14.985"></line>
  </svg>
);

const ReelsIcon = () => (
  <svg aria-label="" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
    <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="2.049" x2="21.95" y1="7.002" y2="7.002"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="13.504" x2="16.362" y1="2.001" y2="7.002"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="7.207" x2="10.002" y1="2.11" y2="7.002"></line>
    <path d="M2 12.001v3.449c0 2.849.698 4.006 1.606 4.945.94.908 2.098 1.607 4.946 1.607h6.896c2.848 0 4.006-.699 4.946-1.607.908-.939 1.606-2.096 1.606-4.945V8.552c0-2.848-.698-4.006-1.606-4.945C19.454 2.699 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.546 2 5.704 2 8.552Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
  </svg>
);

const TaggedIcon = () => (
  <svg aria-label="" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
    <path d="M10.201 3.797 12 1.997l1.799 1.8a1.59 1.59 0 0 0 1.124.465h5.259A1.818 1.818 0 0 1 22 6.08v14.104a1.818 1.818 0 0 1-1.818 1.818H3.818A1.818 1.818 0 0 1 2 20.184V6.08a1.818 1.818 0 0 1 1.818-1.818h5.26a1.59 1.59 0 0 0 1.123-.465Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    <path d="M18.598 22.002V21.4a3.949 3.949 0 0 0-3.948-3.949H9.495A3.949 3.949 0 0 0 5.546 21.4v.603" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
    <circle cx="12.072" cy="11.075" fill="none" r="3.556" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></circle>
  </svg>
);

const FeedListIcon = () => (
  <svg aria-label="" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="10" y2="10"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="6" y2="6"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="14" y2="14"></line>
    <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="21" x2="3" y1="18" y2="18"></line>
  </svg>
);

// --- Stories Row ---

const StoriesContainer = styled.div`
  display: flex;
  padding: 20px 0;
  overflow-x: auto;
  gap: 30px;
  margin-bottom: 20px;
  
  /* Hide scrollbar */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  
  @media (max-width: 736px) {
      padding: 10px;
  }
`;

const StoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  min-width: 85px; /* Ensure space for ring (77px) + padding/border without cutting */
  padding: 5px; /* Add padding to item to prevent hover effects or rings from touching edges */
`;

const StoryPreviewRing = styled.div`
  width: 77px;
  height: 77px;
  border-radius: 50%;
  padding: 3px;
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StoryPreviewImg = styled(FirebaseMedia)`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 2px solid #000;
  object-fit: cover;
`;

const StoryLabel = styled.span`
  font-size: 12px;
  color: #fff;
  text-align: center;
  max-width: 80px;
  line-height: 1.2;
`;

// --- Grid View ---

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px; /* classic instagram gap usually small */
  padding-bottom: 50px;
  width: 100%;
`;

const GridItem = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%; /* Square Aspect Ratio */
  background-color: #262626;
  cursor: pointer;
  overflow: hidden;
  
  img, video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.2s;
  }
  
  &:hover img {
    opacity: 0.8;
  }

  /* Multi-post indicator icon could go here */
`;

const ReelsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns like grid */
  gap: 4px;
  padding-bottom: 50px;
  width: 100%;
`;

const ReelsItem = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 177%; /* ~9:16 Aspect Ratio (16/9 = 1.777) */
  background-color: #262626;
  cursor: pointer;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  /* Icon indicating it's a reel? */
`;

// --- Feed View Styles (reused/adapted) ---

const FeedWrapper = styled.div`
    width: 100%;
    max-width: 470px;
    margin: 0 auto;
    padding-top: 20px;
`;

const PostCard = styled.div`
  background: #000;
  border: 1px solid #262626;
  border-radius: 8px;
  margin-bottom: 24px;
  color: #fff;
`;

const PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 14px;
`;

const FeedProfileRing = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  padding: 3px;
  background: ${props => props.$hasStories ? 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  cursor: ${props => props.$hasStories ? 'pointer' : 'default'};
`;

const SmallProfilePic = styled(FirebaseMedia)`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: ${props => props.$hasStories ? '2px solid #000' : 'none'};
    object-fit: cover;
`;

const PostContent = styled.div`
  width: 100%;
  position: relative;
  background-color: #000;
  min-height: 300px;
  overflow: hidden;

  &:hover button {
    opacity: 1;
  }
`;

const MediaTrack = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => -(props.$index * 100)}%);
  width: 100%;
  height: 100%;
`;

const MediaItem = styled.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* img, video selector removed from styled component to allow FirebaseMedia */
  /* We will style FirebaseMedia via props or nested styles if needed */
  & > * {
    width: 100%;
    display: block;
    max-height: 600px; 
    object-fit: contain;
  }
`;

const PostFooter = styled.div`
  padding: 12px 14px;
`;

const BackButton = styled.button`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 10px;
    cursor: pointer;
    align-self: flex-start;
    
    &:before {
        content: '← ';
    }
`;


// --- Lightbox & Utilities ---
// (Reusing Lightbox styles from previous iteration but ensuring dark mode compatibility)

const LightboxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85); /* Synced with ModalOverlay */
  z-index: 6000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// ... (Other lightbox styles can remain similar, just ensuring colors work)
const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  color: white;
  font-size: 24px;
  z-index: 20;
  cursor: pointer;
  font-weight: bold;
`;

const StoryProgress = styled.div`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  padding: 0 5px;
  display: flex;
  gap: 3px;
  z-index: 10;
`;

const ProgressBar = styled.div`
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  overflow: hidden;
  position: relative;
  
  div {
    height: 100%;
    background: #fff;
    transition: width 0.1s linear;
  }
`;

const StoryMedia = styled.div`
  width: 100%;
  height: 100%;
  img, video {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const TapZone = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 50%;
  z-index: 5;
  cursor: pointer;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
`;

const TopGradient = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 120px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, transparent 100%);
  z-index: 10;
  pointer-events: none;
`;

const StoryViewerHeader = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  z-index: 20;
  color: #fff;
`;

const StoryHeaderProfile = styled(FirebaseMedia)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StoryHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const StoryHeaderUsername = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`;

const StoryHeaderTime = styled.span`
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 2px;
`;

const StoryCloseButton = styled.div`
  cursor: pointer;
  padding: 8px;
  margin-right: -8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    filter: drop-shadow(0 0 2px rgba(0,0,0,0.5));
  }
`;

const StoryNavButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 15;
  opacity: ${props => props.$visible ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
  
  &:after {
    content: '${props => props.$left ? '<' : '>'}';
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
  }

  &:hover:after {
    background: #fff;
  }
`;

// Slide Transition Styles
const SlideContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const DaysTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: ${props => props.$animating ? 'transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)' : 'none'};
  transform: translateX(${props => -(props.$offset * 100)}%);
`;

const DayItem = styled.div`
  min-width: 100%;
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`;

const StoryContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: transparent;
  display: flex;
  justify-content: center;
`;

const StoryInner = styled.div`
  position: relative;
  height: 100%;
  aspect-ratio: 9/16;
  background: #000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;


// --- Helper Functions ---
const getAssetUrl = (uri) => uri; // Deprecated but kept to minimal changes, mostly using getStorageUrl now

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diff = (now - date) / 1000;
  if (diff < 60) return 'Agora';
  if (diff < 3600) return `${Math.floor(diff / 60)} min`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} h`;
  if (diff < 604800) return `${Math.floor(diff / 86400)} d`;
  return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'short', year: 'numeric' });
};

const decodeHtml = (html) => {
  if (!html) return '';
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

// --- Sub-Components ---

// --- Sub-Components ---

const StoryViewer = ({ initialDate, storyDates, stories, onClose, profilePic, singleDayMode = false }) => {
  const [dateIndex, setDateIndex] = useState(storyDates.indexOf(initialDate));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideOffset, setSlideOffset] = useState(storyDates.indexOf(initialDate));
  const [transitionTarget, setTransitionTarget] = useState(null);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [mediaSrc, setMediaSrc] = useState('');
  const controlsTimeoutRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Resolve URL for current story
    if (currentStory && currentStory.uri) {
      getStorageUrl(currentStory.uri).then(url => setMediaSrc(url));
    } else {
      setMediaSrc('');
    }
  }, [currentStory]);

  const activeDate = storyDates[dateIndex];
  const dayStories = [...(stories[activeDate] || [])].sort((a, b) => new Date(a.date) - new Date(b.date));
  const currentStory = dayStories[currentIndex];

  // Transition logic for horizontal slide
  const triggerDayTransition = React.useCallback((targetIdx, direction) => {
    if (animating) return;

    setTransitionTarget(targetIdx);
    setAnimating(true);
    setSlideOffset(targetIdx);

    // Wait for transition duration (0.4s)
    setTimeout(() => {
      setDateIndex(targetIdx);
      setCurrentIndex(direction === 'next' ? 0 : (stories[storyDates[targetIdx]].length - 1));
      setAnimating(false);
      setTransitionTarget(null);
    }, 400);
  }, [animating, stories, storyDates]);

  const nextStory = React.useCallback(() => {
    if (animating) return;

    if (currentIndex < dayStories.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setProgress(0);
    } else {
      if (!singleDayMode && dateIndex < storyDates.length - 1) {
        triggerDayTransition(dateIndex + 1, 'next');
      } else {
        onClose();
      }
    }
  }, [animating, currentIndex, dayStories.length, dateIndex, storyDates, triggerDayTransition, onClose, singleDayMode]);

  const prevStory = React.useCallback(() => {
    if (animating) return;

    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setProgress(0);
    } else {
      if (!singleDayMode && dateIndex > 0) {
        triggerDayTransition(dateIndex - 1, 'prev');
      }
    }
  }, [animating, currentIndex, dateIndex, triggerDayTransition, singleDayMode]);

  const resetControlsTimeout = () => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 3000);
  };

  useEffect(() => {
    resetControlsTimeout();
    return () => { if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current); };
  }, [currentIndex, dateIndex]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextStory();
      if (e.key === 'ArrowLeft') prevStory();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStory, prevStory, onClose]);

  // Auto-advance and Progress animation
  useEffect(() => {
    if (animating || !currentStory || !activeDate) return;
    setProgress(0);

    if (currentStory.type === 'video') return;

    const duration = 5000;
    const intervalTime = 50;
    const increment = (intervalTime / duration) * 100;

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        clearInterval(interval);
        setProgress(100);
        nextStory();
      } else {
        setProgress(currentProgress);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [animating, currentStory?.date, activeDate, nextStory]);

  const handleVideoTimeUpdate = () => {
    if (videoRef.current) {
      const p = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(p);
    }
  };

  if (!currentStory) return null;

  const renderStoryContent = (idx, dayDate, isTransitionSide = false) => {
    const dStories = [...(stories[dayDate] || [])].sort((a, b) => new Date(a.date) - new Date(b.date));
    const story = dStories[idx] || dStories[0];
    if (!story) return null;

    const storyDate = new Date(story.date);
    // Use UTC for labels to avoid timezone shifts from literal metadata
    const dateLabel = storyDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
    const timeLabel = storyDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone: 'UTC' });

    return (
      <StoryContainer>
        <StoryInner>
          <TopGradient />
          <StoryViewerHeader>
            <StoryHeaderProfile path={profilePic} />
            <StoryHeaderInfo>
              <StoryHeaderUsername>matheusdodia</StoryHeaderUsername>
              <StoryHeaderTime>{dateLabel} • {timeLabel}</StoryHeaderTime>
            </StoryHeaderInfo>
            <StoryCloseButton onClick={onClose}>
              <svg aria-label="Fechar" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 24 24" width="18">
                <polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
                <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line>
              </svg>
            </StoryCloseButton>
          </StoryViewerHeader>

          <StoryProgress>
            {dStories.map((_, i) => {
              const isActive = !animating && i === idx && dayDate === activeDate;
              const isSeen = isTransitionSide ? (transitionTarget > dateIndex ? false : true) : (dayDate === activeDate ? i < idx : (transitionTarget > dateIndex ? true : false));
              const currentProgress = isActive ? progress : (isSeen ? 100 : 0);

              return (
                <ProgressBar key={i}>
                  <div style={{ width: `${currentProgress}%`, transition: isActive && story.type === 'image' ? 'width 0.1s linear' : 'none' }} />
                </ProgressBar>
              );
            })}
          </StoryProgress>

          <StoryMedia onMouseMove={resetControlsTimeout}>
            {currentStory.type === 'video' ? (
              <video
                ref={isTransitionSide ? null : videoRef}
                src={mediaSrc}
                autoPlay
                playsInline
                muted={animating || isTransitionSide}
                onTimeUpdate={isTransitionSide ? null : handleVideoTimeUpdate}
                onEnded={isTransitionSide ? null : nextStory}
                onClick={(e) => e.stopPropagation()} // Let tap zones handle nav
              />
            ) : (
              <img src={mediaSrc} alt="story" onClick={(e) => e.stopPropagation()} />
            )}
          </StoryMedia>

          {!animating && !isTransitionSide && (
            <>
              <StoryNavButton $left $visible={controlsVisible} onClick={prevStory} title="Anterior" />
              <StoryNavButton $visible={controlsVisible} onClick={nextStory} title="Próximo" />
              <TapZone $left onClick={prevStory} />
              <TapZone onClick={nextStory} />
            </>
          )}
        </StoryInner>
      </StoryContainer>
    );
  };

  return (
    <LightboxOverlay onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <SlideContainer>
        <DaysTrack $animating={animating} $offset={slideOffset}>
          {storyDates.map((date, idx) => {
            // Only render current day and its neighbors or transition target for performance
            const isCurrent = idx === dateIndex;
            const isTarget = idx === transitionTarget;
            const isNeighbor = Math.abs(idx - dateIndex) === 1;

            if (!isCurrent && !isTarget && !isNeighbor) {
              return <DayItem key={date} />; // Empty placeholder to maintain track length/offset
            }

            return (
              <DayItem key={date}>
                {renderStoryContent(
                  idx === dateIndex ? currentIndex : (idx < dateIndex ? stories[date].length - 1 : 0),
                  date,
                  !isCurrent
                )}
              </DayItem>
            );
          })}
        </DaysTrack>
      </SlideContainer>
    </LightboxOverlay>
  );
};

// --- Post Modal (Lightbox) Styles ---

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85); /* Darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  padding: 20px;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px; 
  height: 90vh; 
  max-height: 900px;
  background-color: #000;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0,0,0,0.5);
  
  @media (max-width: 736px) {
    flex-direction: column;
    height: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 0;
    padding: 0;
  }
`;

const ModalMediaSection = styled.div`
  background-color: transparent;
  display: flex;
  position: relative;
  height: 100%;
  overflow: hidden;
  width: ${props => props.width ? `${props.width}px` : 'auto'};
  aspect-ratio: ${props => props.aspectRatio || 'auto'};

  &:hover button {
    opacity: 1;
  }
`;

const ModalMediaImage = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

const ModalMediaVideo = styled.video`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: contain;
`;

const ModalInfoSection = styled.div`
  width: 400px;
  min-width: 400px;
  background-color: #262626; /* User requested gray */
  display: flex;
  flex-direction: column;
  border-left: 1px solid #363636;
  
  @media (max-width: 1000px) {
     width: 350px;
     min-width: 350px;
  }

  @media (max-width: 736px) {
    display: none; /* Mobile view typically pushes new screen or stacks. For now hiding info on mobile modal to keep media focus */
  }
`;

const ModalHeader = styled.div`
  padding: 14px 16px;
  border-bottom: 1px solid #363636;
  display: flex;
  align-items: center;
  color: #fff;
  flex-shrink: 0;
  gap: 12px;
`;

const SmallAvatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const ModalUsername = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: #fff;
`;

const ModalMainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  color: #fff;
  font-size: 14px;
    
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #262626;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555;
    border-radius: 4px;
    border: 2px solid #262626;
  }
`;

const CommentRow = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: flex-start;
`;

const CommentText = styled.div`
  flex: 1;
  white-space: pre-wrap;
  line-height: 1.4;
  
  span {
    font-weight: 600;
    margin-right: 6px;
  }
`;

const ModalFooter = styled.div`
  border-top: 1px solid #363636;
  padding: 16px;
  background-color: #262626;
  flex-shrink: 0;
`;

const ActionIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 12px;
  svg {
    cursor: pointer;
    &:hover { opacity: 0.7; }
  }
`;

const ModalDate = styled.div`
  font-size: 12px;
  color: #a8a8a8;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  z-index: 5001;
  padding: 8px;
  line-height: 1;
  
  &:hover {
    opacity: 0.8;
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 60px;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  ${props => props.$left ? 'left: 0;' : 'right: 0;'}
  
  &:after {
    content: '${props => props.$left ? '<' : '>'}';
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    font-weight: bold;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 0 5px rgba(0,0,0,0.3);
    position: absolute;
    ${props => props.$left ? 'left: 10px;' : 'right: 10px;'}
  }

  &:hover:after {
    background: rgba(255, 255, 255, 0.9);
  }
`;

const InstagramPostModal = ({ post, onClose, profilePic, stories, onProfileClick }) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(null);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  if (!post) return null;

  const currentMedia = post.media[mediaIndex];
  const hasMultiple = post.media.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    if (mediaIndex < post.media.length - 1) {
      setMediaIndex((prev) => prev + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (mediaIndex > 0) {
      setMediaIndex((prev) => prev - 1);
    }
  };

  // Keyboard navigation for carousel
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        setMediaIndex(prev => (prev < post.media.length - 1 ? prev + 1 : prev));
      }
      if (e.key === 'ArrowLeft') {
        setMediaIndex(prev => (prev > 0 ? prev - 1 : prev));
      }
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [post.media.length, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const formatDateExtended = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  // Extract date in YYYY-MM-DD format from post.date (ISO string)
  const postDateKey = post.date.split('T')[0];
  const hasStories = stories && stories[postDateKey] && stories[postDateKey].length > 0;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalCloseButton onClick={onClose}>&times;</ModalCloseButton>
      <ModalContainer style={{ width: 'fit-content', backgroundColor: 'transparent' }}>
        <ModalMediaSection aspectRatio={aspectRatio}>
          {hasMultiple && (
            <>
              {mediaIndex > 0 && (
                <NavButton $left onClick={handlePrev} />
              )}
              {mediaIndex < post.media.length - 1 && (
                <NavButton onClick={handleNext} />
              )}
            </>
          )}
          <MediaTrack $index={mediaIndex}>
            {post.media.map((media, idx) => (
              <MediaItem key={idx}>
                <FirebaseMedia
                  path={media.uri}
                  type={media.type}
                  alt={`Post media ${idx}`}
                  controls={media.type === 'video'}
                  autoPlay={media.type === 'video' && idx === mediaIndex}
                  onLoad={idx === 0 ? handleImageLoad : undefined}
                  onLoadedMetadata={media.type === 'video' && idx === 0 ? handleImageLoad : undefined}
                />
              </MediaItem>
            ))}
          </MediaTrack>
        </ModalMediaSection>

        <ModalInfoSection>
          <ModalHeader>
            <FeedProfileRing $hasStories={hasStories} onClick={() => hasStories && onProfileClick(postDateKey)} style={{ width: '38px', height: '38px', marginRight: '12px' }}>
              <SmallProfilePic path={profilePic} $hasStories={hasStories} style={{ width: '100%', height: '100%' }} />
            </FeedProfileRing>
            <ModalUsername>matheusdodia</ModalUsername>
          </ModalHeader>

          <ModalMainContent>
            {/* Description */}
            <CommentRow>
              <CommentText>
                {decodeHtml(post.description)}
              </CommentText>
            </CommentRow>

            {/* Comments */}
            {post.comments && post.comments.map((comment, idx) => (
              <CommentRow key={idx}>
                <CommentText>
                  {decodeHtml(comment.text)}
                </CommentText>
              </CommentRow>
            ))}
          </ModalMainContent>

          <ModalFooter>
            <ModalDate>{formatDateExtended(post.date)}</ModalDate>
          </ModalFooter>
        </ModalInfoSection>
      </ModalContainer>
    </ModalOverlay>
  );
};

const FeedPost = ({ post, profilePicSrc, formatDate, decodeHtml, getAssetUrl, stories, onProfileClick }) => {
  const [mediaIndex, setMediaIndex] = useState(0);
  const [aspectRatio, setAspectRatio] = useState(null);

  const handleImageLoad = (e) => {
    const { naturalWidth, naturalHeight } = e.target;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  const currentMedia = post.media[mediaIndex];
  const hasMultiple = post.media.length > 1;

  const handleNext = (e) => {
    e.stopPropagation();
    if (mediaIndex < post.media.length - 1) {
      setMediaIndex((prev) => prev + 1);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (mediaIndex > 0) {
      setMediaIndex((prev) => prev - 1);
    }
  };

  // Extract date in YYYY-MM-DD format from post.date (ISO string)
  const postDateKey = post.date.split('T')[0];
  const hasStories = stories && stories[postDateKey] && stories[postDateKey].length > 0;

  return (
    <PostCard>
      <PostHeader>
        <FeedProfileRing $hasStories={hasStories} onClick={() => hasStories && onProfileClick(postDateKey)}>
          <SmallProfilePic path={profilePicSrc} $hasStories={hasStories} />
        </FeedProfileRing>
        <span style={{ fontWeight: 600 }}>matheusdodia</span>
        <span style={{ marginLeft: 'auto', color: '#8e8e8e', fontSize: '12px' }}>{formatDate(post.date)}</span>
      </PostHeader>
      <PostContent style={{ aspectRatio: aspectRatio || 'auto' }}>
        {hasMultiple && (
          <>
            {mediaIndex > 0 && (
              <NavButton $left onClick={handlePrev} />
            )}
            {mediaIndex < post.media.length - 1 && (
              <NavButton onClick={handleNext} />
            )}
          </>
        )}
        <MediaTrack $index={mediaIndex}>
          {post.media.map((media, idx) => (
            <MediaItem key={idx}>
              <FirebaseMedia
                path={media.uri}
                type={media.type}
                controls={media.type === 'video' && idx === mediaIndex}
                onLoad={idx === 0 ? handleImageLoad : undefined}
                onLoadedMetadata={media.type === 'video' && idx === 0 ? handleImageLoad : undefined}
              />
            </MediaItem>
          ))}
        </MediaTrack>
      </PostContent>
      <PostFooter>
        <div style={{ fontSize: '14px', whiteSpace: 'pre-wrap' }}>
          <span>{decodeHtml(post.description)}</span>
        </div>
        {post.comments && post.comments.length > 0 && (
          <div style={{ fontSize: '14px' }}>
            <br />
            {post.comments.map((c, i) => (
              <div key={i} style={{ marginBottom: '4px', whiteSpace: 'pre-wrap' }}>
                {decodeHtml(c.text)}
              </div>
            ))}
          </div>
        )}
      </PostFooter>
    </PostCard>
  );
};

const Instagram = () => {
  const [activeTab, setActiveTab] = useState('posts');
  const [selectedPost, setSelectedPost] = useState(null); // For feed view from grid
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeStoryDate, setActiveStoryDate] = useState(null);

  // Data State
  const [data, setData] = useState({ posts: [], stories: {}, reels: [], loading: true });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [postsData, storiesData, reelsData] = await Promise.all([
          fetchJsonFromStorage('instagram/posts.json'),
          fetchJsonFromStorage('instagram/stories.json'),
          fetchJsonFromStorage('instagram/reels.json')
        ]);

        setData({
          posts: postsData || [],
          stories: storiesData || {},
          reels: reelsData || [],
          loading: false
        });
      } catch (err) {
        console.error("Failed to load Instagram data", err);
        setData(prev => ({ ...prev, loading: false }));
      }
    };
    loadData();
  }, []);

  const { posts, stories, reels, loading } = data;

  const storyDates = Object.keys(stories).sort((a, b) => new Date(b) - new Date(a)); // Newest first usually

  // Stats Calculations
  const reelsCount = posts ? posts.filter(p => p.media[0].type === 'video').length : 0;
  const storiesCount = stories ? Object.values(stories).reduce((acc, day) => acc + day.length, 0) : 0;

  const [singleDayMode, setSingleDayMode] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const [visibleGridItems, setVisibleGridItems] = useState(15); // Initial grid items
  const feedLoaderRef = useRef(null);
  const gridLoaderRef = useRef(null); // Ref for grid infinite scroll

  // Infinite Scroll logic for Feed
  useEffect(() => {
    if (activeTab !== 'feed') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setVisiblePosts(p => Math.min(p + 10, posts.length));
    }, { rootMargin: '200px' });
    if (feedLoaderRef.current) observer.observe(feedLoaderRef.current);
    return () => observer.disconnect();
  }, [activeTab, posts.length]);

  // Infinite Scroll logic for Grid
  useEffect(() => {
    if (activeTab !== 'posts') return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisibleGridItems(prev => Math.min(prev + 15, posts.length));
      }
    }, { rootMargin: '200px' });

    if (gridLoaderRef.current) {
      observer.observe(gridLoaderRef.current);
    }

    return () => observer.disconnect();
  }, [activeTab, posts.length]);

  if (loading) {
    return <Container><div style={{ marginTop: 100 }}>Carregando...</div></Container>;
  }



  const handleOpenFeed = () => setActiveTab('feed');
  const handleCloseFeed = () => setActiveTab('posts');

  const handleOpenStories = (date, singleDay = false) => {
    setSingleDayMode(singleDay);
    setActiveStoryDate(date);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const profilePicSrc = "/src/data/instagram/media/profile/202203/275015161_496804875327432_7143646680586312085_n_17894747972575070.jpg";

  const getReelThumbnail = (uri) => {
    if (!uri) return '';
    const filename = uri.split('/').pop().replace('.mp4', '.jpg');
    return `/src/data/instagram/media/reels/thumbnails/${filename}`;
  };

  return (
    <Container>
      <ContentWrapper>
        {/* Header - Always visible */}
        <ProfileHeader>
          <ProfilePicContainer>
            <ProfileImage
              path={profilePicSrc}
              alt="Profile"
            />
          </ProfilePicContainer>
          <ProfileInfo>
            <UsernameRow>
              <h2>matheusdodia</h2>
            </UsernameRow>
            <NameSection>
              <h1>Matheus José</h1>
            </NameSection>
            <StatsRow>
              <li><strong>{posts.length}</strong> posts</li>
              <li><strong>{storiesCount}</strong> stories</li>
              <li><strong>{reelsCount}</strong> reels</li>
            </StatsRow>
            <BioSection>
              <span>meu diário (quase) secreto</span>
            </BioSection>
          </ProfileInfo>
        </ProfileHeader>

        {/* Stories Row - Always visible */}
        <StoriesContainer>
          {storyDates.map(date => {
            const daysStories = [...(stories[date] || [])].sort((a, b) => new Date(a.date) - new Date(b.date));
            if (daysStories.length === 0) return null;
            const preview = daysStories[0];
            const thumbUri = preview.media[0].uri; // Use first media (oldest after sort)

            // Format Label avoiding timezone shift: DD/MM/YYYY
            const [year, month, day] = date.split('-');
            const label = `${day}/${month}/${year}`;

            return (
              <StoryItem key={date} onClick={() => handleOpenStories(date, false)}>
                <StoryPreviewRing>
                  <StoryPreviewImg path={thumbUri} />
                </StoryPreviewRing>
                <StoryLabel>{label}</StoryLabel>
              </StoryItem>
            );
          })}
        </StoriesContainer>

        {/* Navigation Tabs - Always visible */}
        <TabsContainer>
          <TabItem $active={activeTab === 'posts'} onClick={handleCloseFeed}>
            <GridIcon />
            <span>PUBLICAÇÕES</span>
          </TabItem>
          <TabItem $active={activeTab === 'reels'} onClick={() => setActiveTab('reels')}>
            <ReelsIcon />
            <span>REELS</span>
          </TabItem>
          <TabItem $active={activeTab === 'feed'} onClick={handleOpenFeed}>
            <FeedListIcon />
            <span>FEED</span>
          </TabItem>
        </TabsContainer>

        {/* View Content Switch */}
        {activeTab === 'posts' && (
          <>
            <GridContainer>
              {posts.slice(0, visibleGridItems).map((post, idx) => {
                const media = post.media[0];
                return (
                  <GridItem key={idx} onClick={() => handlePostClick(post)}>
                    <FirebaseMedia
                      path={media.uri}
                      type={media.type}
                      alt="Post"
                    />
                  </GridItem>
                );
              })}
            </GridContainer>
            {visibleGridItems < posts.length && (
              <div ref={gridLoaderRef} style={{ height: '50px', width: '100%' }}></div>
            )}
          </>
        )}

        {activeTab === 'reels' && (
          <ReelsContainer>
            {reels.map((reel, idx) => {
              const media = reel.media[0];
              return (
                <ReelsItem key={reel.media[0].uri || idx} onClick={() => handlePostClick(reel)}>
                  <FirebaseMedia
                    path={media.uri}
                    type={media.type}
                    alt="Reel"
                  />
                </ReelsItem>
              );
            })}
          </ReelsContainer>
        )}

        {activeTab === 'feed' && (
          <FeedWrapper>
            {posts.slice(0, visiblePosts).map((post, index) => (
              <FeedPost
                key={index}
                post={post}
                profilePicSrc={profilePicSrc}
                formatDate={formatDate}
                decodeHtml={decodeHtml}
                getAssetUrl={getAssetUrl}
                stories={stories}
                onProfileClick={(date) => handleOpenStories(date, true)}
              />
            ))}
            <div ref={feedLoaderRef} style={{ height: '30px' }} />
          </FeedWrapper>
        )}
      </ContentWrapper>

      {/* Lightbox for Stories */}
      {activeStoryDate && (
        <StoryViewer
          initialDate={activeStoryDate}
          storyDates={storyDates}
          stories={stories}
          onClose={() => setActiveStoryDate(null)}
          profilePic={profilePicSrc}
          singleDayMode={singleDayMode}
        />
      )}

      {/* Lightbox for Posts */}
      {selectedPost && (
        <InstagramPostModal
          post={selectedPost}
          onClose={() => setSelectedPost(null)}
          profilePic={profilePicSrc}
          stories={stories}
          onProfileClick={(date) => handleOpenStories(date, true)}
        />
      )}
    </Container>
  );
};


export default Instagram;
