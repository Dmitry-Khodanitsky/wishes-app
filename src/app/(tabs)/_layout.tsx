import { NativeTabs } from 'expo-router/unstable-native-tabs'

export default function TabLayouts() {
  return (
    <NativeTabs
        // tintColor={DynamicColorIOS({
        //   dark: theme.accent.primary,
        //   light: theme.accent.primary,
        // })}
        // labelStyle={{
        //   color: DynamicColorIOS({
        //     dark: theme.text.secondary,
        //     light: theme.text.secondary,
        //   }),
        // }}
      // Правильные значения для minimizeBehavior:
      minimizeBehavior="automatic" // или "never", "onScrollDown", "onScrollUp"
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label hidden>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'house', selected: 'house.fill' }}
          md="home"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search">
        <NativeTabs.Trigger.Label hidden>Search</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'magnifyingglass', selected: 'magnifyingglass' }}
          md="search"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="saved">
        <NativeTabs.Trigger.Label hidden>Saved</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'bookmark', selected: 'bookmark.fill' }}
          md="bookmark"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="profile">
        <NativeTabs.Trigger.Label hidden>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf={{ default: 'person', selected: 'person.fill' }}
          md="person"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
