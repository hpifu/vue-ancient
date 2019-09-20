<template>
  <v-app-bar app clipped-left elevate-on-scroll class="pb-3" color="#fafafa">
    <v-toolbar-title>
      <span class="teal--text">
        <strong>HPiFu</strong>
      </span>
      &nbsp;&nbsp;
      <span class="font-weight-light cyan--text">ancient</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field
      v-model="search"
      prepend-inner-icon="search"
      :label="'搜索 ' + $config.org + ' 账户'"
      single-line
      rounded
      clearable
      clear-icon="clear"
      class="mt-9"
      filled
      full-width
    ></v-text-field>
  </v-app-bar>
</template>
