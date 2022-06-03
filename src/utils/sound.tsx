import { Audio, AVPlaybackSource } from 'expo-av';

export default async function playSound(d: AVPlaybackSource, _params?: { loop: boolean; volume?: number; muted?: boolean }) {
    const { sound } = await Audio.Sound.createAsync(d);

    if (_params) {
        if (_params.volume) await sound.setVolumeAsync(_params.volume)
        if (_params.loop) await sound.setIsLoopingAsync(_params.loop)
        if (_params.muted) await sound.setIsMutedAsync(_params.muted)
    }

    await sound.playAsync();
    return sound
}