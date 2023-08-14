import { Video } from '../models';
import { BadRequestError, NotFoundError } from '../utils/customErrors';
import { VideoSchema } from '../types/models';

export const fetchAllVideos = async (): Promise<VideoSchema[]> => {
  return await Video.find();
};

export const validateVideoId = async (
  videoID: string
): Promise<VideoSchema | null> => {
  if (!videoID) {
    throw new BadRequestError('Video ID is required');
  }

  try {
    const video = await Video.findById(videoID);
    return video;
  } catch {
    throw new NotFoundError('Video not found');
  }
};

export const createNewVideo = async (
  title: string,
  url: string
): Promise<void> => {
  if (!title || !url) {
    throw new BadRequestError('Missing required attributes');
  }

  const video = new Video({
    title,
    url
  });
  await video.save();
};

export const searchVideosByTitle = (title: string): Promise<VideoSchema[]> => {
  if (!title) {
    throw new BadRequestError('Title is required');
  }

  const regex = new RegExp(title, 'i');
  const videos = Video.find({ title: { $regex: regex } });
  return videos;
};
