import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { GradeInterfaces } from "../interfaces/Grade.interface";
import { getNotas } from "../services/GradeService";
import { Avatar, ListItem, FAB } from "@rneui/base";
import { ListItemContent } from "@rneui/base/dist/ListItem/ListItem.Content";
import { ListItemSubtitle } from "@rneui/base/dist/ListItem/ListItem.Subtitle";

const ListGrade = ({ navigation }) => {
  const [time, setTime] = useState<any>()
  const refreshList = () => {
    setTime(new Date().getTime())
  }
  return (
    <>
      <View>
        <FlatList
          data={getNotas()}
          renderItem={({ item }) => {
            return <RenderItemSubject item={item} navigation={navigation}></RenderItemSubject>
          }}
          extraData={time}
        />
      </View>
      <FAB title={"+"} placement="right" onPress={() => navigation.navigate("GradeFormNav", { fnfRefresh: refreshList})}></FAB>
    </>
  );
};

export default ListGrade;

const RenderItemSubject = ({ item, navigation }) => {
  return <TouchableOpacity onPress={() => navigation.navigate("GradeFormNav", {nota: item})}>
    <ListItem bottomDivider>
    <Avatar
      title={item.subject.charAt(1).toUpperCase()}
      containerStyle={{ backgroundColor: "#0af" }}
      rounded
    />
    <ListItemContent>
      <ListItem.Title>
        {item.subject}
      </ListItem.Title>
    </ListItemContent>
    <ListItemContent>
      <ListItemSubtitle>
        {item.grade}
      </ListItemSubtitle>
    </ListItemContent>
  </ListItem>;
  </TouchableOpacity>
}
