import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CitySelect from '../app/components/CitySelect';

  it('should render multiple options', ()=> {
    let places = [
                  {
                    "id": 1235234,
                    "name": "Ap #621-9696 Nulla Rd.",
                    "city": "Airdrie",
                    "price": 2822,
                    "rooms": 4,
                    "beds": 5,
                    "capacity": 4,
                    "description": "at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada",
                    "image": "https://source.unsplash.com/uuApNXxgcRM/600x400"
                  },
                  {
                    "id": 1235238,
                    "name": "Ap #815-1516 Elementum Road",
                    "city": "Robelmont",
                    "price": 4206,
                    "rooms": 1,
                    "beds": 6,
                    "capacity": 6,
                    "description": "eu nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet",
                    "image": "https://source.unsplash.com/zuXlkbsfU9Q/600x400"
                  }
                ]
    let options = places.map((p, index)=>
      <option key={index} value={p.id} className="something">{p.city}</option>)
    expect(options.length).toBeGreaterThan(0);
  });