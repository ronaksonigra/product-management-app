export class Product {
  id: number = 0;
  name: string;
  price: number;
  availability: boolean = true;
  location: string;
  imageURL: string;
  description: string;
  disabled?: boolean = false;
  liked?: boolean = false;
  reviews?: Review[] = [];
}

class Review {
  user: string;
  profilePic: string
  rating: number;
  review: string;
}

export class DefaultProducts {
  products: Product[] = [
    {
      "id": 1,
      "availability": true,
      "disabled": false,
      "liked": false,
      "name": "Art 1",
      "price": 1050,
      "location": "Ahmedabad",
      "imageURL": "https://picsum.photos/id/1002/300/200",
      "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dictum nulla sem, et aliquet nunc eleifend blandit. In ac mauris ac libero pretium tristique. Donec non dapibus nibh, non accumsan magna. Suspendisse luctus nibh vitae nunc molestie lobortis. Vivamus blandit hendrerit magna sit amet lacinia. Donec pharetra velit elit, sagittis luctus quam suscipit at. Nunc molestie finibus bibendum. Suspendisse vel nibh consectetur, pulvinar mauris a, finibus diam.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 5,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 2,
      "availability": true,
      "disabled": false,
      "liked": false,
      "name": "Art 2",
      "price": 2090,
      "location": "Delhi",
      "imageURL": "https://picsum.photos/id/101/300/200",
      "description": "Aliquam nec dictum est. Vivamus dapibus mauris ac fringilla porta. Phasellus venenatis accumsan mi at faucibus. Mauris ut dui convallis nunc sollicitudin fringilla a et turpis. Etiam scelerisque molestie eros. Proin eleifend eu enim quis mattis. Praesent sodales commodo efficitur. Sed eu iaculis diam. Fusce varius pharetra placerat. Mauris porttitor ipsum leo, ac posuere ex sollicitudin vel. Cras lobortis, dui vitae efficitur rhoncus, erat nulla tincidunt nisl, at maximus mi leo a ex. Proin luctus, neque nec gravida semper, nibh purus molestie tortor, vel congue nunc sapien sed justo.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 5,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 3,
      "availability": true,
      "disabled": false,
      "liked": true,
      "name": "Art 3",
      "price": 2090,
      "location": "Delhi",
      "imageURL": "https://picsum.photos/id/1016/300/200",
      "description": "Phasellus scelerisque porta neque, vitae imperdiet justo congue vitae. Vivamus fermentum eros sit amet leo scelerisque, vitae consectetur dui sagittis. Suspendisse porta quis est eget placerat. Mauris nisi neque, consequat non dapibus sit amet, consectetur in tortor. Cras pellentesque ex non tellus tempus, in dapibus lectus rhoncus. Nam in erat elit. Donec dignissim dui est, eget gravida lorem dignissim in. Aliquam blandit erat massa, eget vulputate sem efficitur non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec quis massa facilisis, rutrum augue vel, vulputate erat. Aenean pharetra viverra libero, a faucibus diam semper vel.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 5,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 4,
      "availability": true,
      "disabled": false,
      "liked": false,
      "name": "Art 4",
      "price": 1527,
      "location": "Chennai",
      "imageURL": "https://picsum.photos/id/1015/300/200",
      "description": "Etiam consequat interdum tristique. Ut vehicula leo nulla, non malesuada lorem elementum eget. Donec id faucibus lacus. Vivamus ullamcorper ipsum id pulvinar eleifend. Vestibulum nec ultricies velit. Pellentesque libero tortor, feugiat nec bibendum eu, malesuada ut dui. Maecenas interdum at ipsum nec lobortis. Morbi id malesuada eros. Fusce ut neque et est viverra faucibus sit amet et dolor. Quisque euismod laoreet ipsum a efficitur.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 2,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 5,
      "availability": false,
      "disabled": false,
      "liked": false,
      "name": "Art 5",
      "price": 2052,
      "location": "Mumbai",
      "imageURL": "https://picsum.photos/id/1021/300/200",
      "description": "Fusce ultricies cursus tellus id dictum. Aliquam aliquam ipsum eget venenatis vehicula. Vestibulum venenatis, augue a consectetur aliquam, erat felis luctus tellus, id blandit eros dui in tortor. Phasellus in orci non est egestas porttitor eu at est. Quisque magna quam, faucibus in tincidunt at, pulvinar non lectus. Fusce suscipit lorem id turpis varius, nec volutpat tellus laoreet. Nullam ultrices mi eu ante consequat posuere. Ut blandit erat lacus, eget mollis mauris facilisis sit amet. Nunc lobortis velit leo, venenatis efficitur augue interdum sed. Etiam molestie, elit in iaculis congue, magna mauris mattis eros, nec placerat enim est id urna.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 3,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 1,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 7,
      "availability": true,
      "disabled": false,
      "liked": true,
      "name": "Art 7",
      "price": 1759,
      "location": "Delhi",
      "imageURL": "https://picsum.photos/id/1025/300/200",
      "description": "Suspendisse at pretium justo, ac sagittis tortor. Mauris sollicitudin augue et quam pulvinar, vel tempor eros accumsan. Vivamus porta, augue a sagittis lacinia, orci nibh congue dui, sit amet fermentum nibh eros in elit. Nam nec tellus pellentesque eros fermentum vestibulum ut luctus mauris. Fusce lobortis sed nisl a rhoncus. Sed elementum ipsum convallis ligula fermentum, sed mattis orci lacinia. Sed volutpat egestas vehicula. Proin ipsum dui, aliquet sit amet imperdiet vitae, mattis in nisi. Praesent arcu enim, vestibulum et viverra ut, rhoncus vel dolor. Proin et nulla tincidunt quam accumsan lobortis condimentum sed sapien. Nullam ut porta turpis. Sed tortor mi, ultrices et pretium at, mattis id felis.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 3,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 8,
      "availability": true,
      "disabled": false,
      "liked": false,
      "name": "Art 8",
      "price": 500,
      "location": "Delhi",
      "imageURL": "https://picsum.photos/id/1019/300/200",
      "description": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 5,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 5,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    },
    {
      "id": 9,
      "availability": false,
      "disabled": true,
      "liked": false,
      "name": "Art 6",
      "price": 5874,
      "location": "Mumbai",
      "imageURL": "https://picsum.photos/id/1002/300/200",
      "description": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id.",
      "reviews": [
        {
          "user": "John",
          "profilePic": "https://picsum.photos/200",
          "rating": 1,
          "review": "Nunc porta lacus urna, sit amet auctor quam bibendum sit amet. Maecenas pretium quam a urna varius elementum. Pellentesque imperdiet ipsum ut pharetra bibendum. Integer sed massa ornare, mollis urna eget, lobortis quam. Integer euismod quam ac nisl posuere, id egestas odio hendrerit. Duis feugiat sagittis odio a facilisis. Nulla placerat nulla urna, et finibus metus eleifend sit amet. Sed feugiat arcu est, eget scelerisque nulla porta sed. Donec imperdiet elit eu justo blandit, vitae fermentum tellus malesuada. Suspendisse sit amet velit eget risus elementum venenatis eu ac leo. Integer non vestibulum tellus, a convallis enim. Sed nisl dolor, lobortis ultrices imperdiet dignissim, cursus et ligula. Vestibulum eu interdum dolor. Aenean sollicitudin rutrum sagittis. Etiam tempor tristique sem, ullamcorper egestas ex imperdiet id."
        },
        {
          "user": "Elle",
          "profilePic": "https://picsum.photos/200",
          "rating": 4,
          "review": "Duis pharetra sem nisl, quis efficitur augue convallis non. Donec tincidunt nec quam sollicitudin suscipit. Ut iaculis libero eu ipsum feugiat, in pulvinar libero placerat. Donec et ex vehicula, commodo augue ut, venenatis lectus. Mauris eget urna felis. Proin dignissim vel neque non fermentum. Aliquam eu tincidunt ante, ac interdum enim."
        }
      ]
    }
  ]
}