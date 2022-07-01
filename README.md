# React Native 학습 + 테스트 코드

## 어떤앱 ?

- 간단한 음식 정보 어플

## 학습 내용

- react stack navigation을 활용한 스크린 이동 구현하기

  - NavigationContainer으로 스크린들을 감싼다

  - const Stack = createNativeStackNavigator() 을 사용하여 Stack의 프로퍼티를 사용할 수 있도록 한다.

  - Stack.Navigator와 Stack.Screen을 사용하여 고유의 name값을 넣고 등록할 컴포넌트들 지정한다 ( name값은 navigate 기능을 수행할때 사용되므로 반드시 unique값으로 넣는다.)

  - 기본적으로 홈화면은 Stack.Screen이 가장 첫번쨰로 등록된 컴포넌트가 홈화면으로 되며, Stack.Navigator에 initialRouteName 속성값을 사용하여 지정해 줄 수도있다.

  - screenOptions 속성을 활용하여 navigation header의 옵션을 적용해줄 수 있다. (스타일, 텍스트 등 다양한 기능들이 많다.)

  - Stack.Navigator에 있는 screenOptions에는 모든 컴포넌트들에 공통적으로 적용할 옵션을 넣고, Stack.Screen에 있는 screenOptions는 그 스크린에만 적용할 옵션을 넣으면 된다.

  - Stack.Screen options에 함수를 넣어 콜백인자로 route와 navigation 데이터를 받을 수 있고, 이 데이터로 header에 원하는 title과 같은것을 렌더링 할 수도 있다.

  - 또한 스크린내 navigation props에서 navigation.setOptions({}) 을 사용해서도 title 을 지정해줄 수 있다. ( useEffect 혹은 useLayoutEffect를 감싸고 렌더링 해준다. )

- react drawer navigation 학습

  - NavigationContainer으로 스크린을 감싼다

  - const Drawer = createDrawerNavigator() 을 사용하여 Drawer의 프로퍼티들의 사용할 수 있도록 한다.

  - Drawer.Navigator을 만들고 그 안에 Drawer.Screen을 사용하여 스크린 컴포넌트들을 등록한다 ( Stack과 똑같이 name을 사용하여 unique 값을 지정한다 )

  - Stack Navigator처럼 option을 설정하여 원하는 설정으로 설정하고 스타일링이 가능하다.

## Stack Navigator vs Drawer Navigator

- Stack Navigator은 헤더가 생기며 스크린 이동시 go back 기능과 스크린 네임이 header 타이틀로 생긴다 ( https://reactnavigation.org/docs/stack-navigator )
- Drawer Navigator은 왼쪽에 Drawer 박스가 생기며 활성화 시키면 그곳에서 스크린 네임들을 클릭하여 그곳으로 스크린 이동을 한다. ( https://reactnavigation.org/docs/drawer-navigator )
