import { Audio, AVPlaybackSource } from 'expo-av';

export default async function playSound(d: AVPlaybackSource) {
    const { sound } = await Audio.Sound.createAsync(d);
    await sound.playAsync();
    return sound
}