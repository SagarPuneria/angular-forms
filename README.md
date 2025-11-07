# Angular Forms & Animations Demo

A comprehensive Angular 13 application demonstrating different form implementations (Template-driven and Reactive forms) along with Angular animations. This project serves as a learning resource for understanding Angular form handling, validation, and animation techniques.

## 🚀 Features

- **Template-driven Forms**: Traditional Angular forms using NgModel
- **Reactive Forms**: Model-driven forms using FormBuilder and FormGroups
- **Form Validation**: Built-in and custom validators
- **Password Matching**: Custom validator for password confirmation
- **Dynamic Form Arrays**: Shopping list with dynamic add/remove functionality
- **Angular Animations**: Various animation effects and transitions
- **JSON Server Integration**: Mock backend for form data persistence
- **Responsive Design**: Mobile-friendly form layouts

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** (version 6.x or higher)
- **Angular CLI** (version 13.x)

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SagarPuneria/angular-forms.git
   cd angular-forms
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build Angular Application:**
   ```bash
   npm run build
   ```

4. **Install JSON Server globally (for backend simulation):**
   ```bash
   npm install -g json-server
   ```

## 🏃‍♂️ Running the Application

### Development Server

1. **Start the Angular development server:**
   ```bash
   npm start
   # or
   ng serve
   ```
   Navigate to `http://localhost:4200/`. The app will automatically reload when you make changes.

2. **Start the JSON Server (in a separate terminal):**
   ```bash
   json-server --watch db.json --port 3000
   ```
   This will start the mock backend at `http://localhost:3000`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running Tests

- **Unit tests:** `ng test` (via [Karma](https://karma-runner.github.io))
- **End-to-end tests:** `ng e2e` (requires additional e2e testing package)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── animation/              # Animation demonstrations
│   │   │   ├── animation.component.ts
│   │   │   ├── animation.component.html
│   │   │   ├── animation.component.css
│   │   │   └── animations.ts       # Custom animation definitions
│   │   ├── reactive-form/          # Reactive form implementation
│   │   │   ├── reactive-form.component.ts
│   │   │   ├── reactive-form.component.html
│   │   │   └── reactive-form.component.css
│   │   └── template-form/          # Template-driven form implementation
│   │       ├── template-form.component.ts
│   │       ├── template-form.component.html
│   │       └── template-form.component.css
│   ├── models/
│   │   └── user.model.ts           # User form data interface
│   ├── services/
│   │   └── userform.service.ts     # HTTP service for form data
│   ├── shared/
│   │   ├── must-match.directive.ts # Password matching directive
│   │   └── must-match.validator.ts # Password matching validator
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.css
│   └── app.module.ts
├── assets/                         # Static assets
├── environments/                   # Environment configurations
└── db.json                        # JSON Server database
```

## 🔧 Key Components

### 1. Template-driven Form (`template-form.component`)
- Uses Angular's NgModel for two-way data binding
- Template-based validation
- Form submission with validation checks
- Integration with JSON Server backend

### 2. Reactive Form (`reactive-form.component`)
- Uses FormBuilder and FormGroups
- Programmatic form control
- Advanced validation including custom validators
- Dynamic FormArray for shopping list items
- Password confirmation validation
- Form manipulation methods (setValue, patchValue, reset)

### 3. Animation Component (`animation.component`)
- Demonstrates various Angular animation techniques:
  - State-based animations
  - Transition animations
  - Enter/Leave animations
  - Custom animation triggers
- Interactive UI elements with smooth transitions

### 4. Custom Validators and Directives
- **MustMatchValidator**: Ensures password and confirm password fields match
- **MustMatchDirective**: Template-driven form directive for password matching

### 5. User Service (`userform.service`)
- HTTP client integration
- RESTful API calls to JSON Server
- Separate methods for template and reactive form data submission

## 📝 Form Features

### Template-driven Form Features:
- Email validation
- Password fields
- Address information (street, city, state, zip)
- Terms and conditions checkbox
- Form state tracking and validation messages

### Reactive Form Features:
- All template form features plus:
- Password confirmation matching
- Dynamic shopping list (FormArray)
- Custom validation rules
- Form manipulation controls
- Advanced form state management

### Validation Rules:
- **Email**: Required, valid email format
- **Password**: Required
- **Confirm Password**: Required, must match password
- **Address**: Required, 5-10 characters
- **City**: Required, alphabetic characters only
- **State**: Required
- **ZIP**: Required, numeric, 5-10 digits

## 🎨 Animation Features

The application includes several animation demonstrations:

- **Size Animation**: Dynamic div resizing with smooth transitions
- **Balloon Effect**: Custom balloon animation
- **Fade In/Out**: Opacity-based transitions
- **Enter/Leave**: Slide animations for dynamic content
- **List Animations**: Smooth animations for adding/removing list items

## 🌐 API Endpoints

The JSON Server provides the following endpoints:

- **POST** `/template-form` - Submit template-driven form data
- **POST** `/reactive-form` - Submit reactive form data
- **GET** `/template-form` - Retrieve template form submissions
- **GET** `/reactive-form` - Retrieve reactive form submissions

## 🎯 Learning Objectives

This project demonstrates:

1. **Form Handling**: Both template-driven and reactive approaches
2. **Validation**: Built-in and custom validators
3. **State Management**: Form state tracking and manipulation
4. **HTTP Integration**: RESTful API communication
5. **Animations**: Angular animation system and custom effects
6. **Best Practices**: TypeScript interfaces, service injection, component architecture

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📚 Additional Resources

- [Angular Forms Guide](https://angular.io/guide/forms)
- [Angular Animations](https://angular.io/guide/animations)
- [Angular CLI Documentation](https://angular.io/cli)
- [Reactive Forms](https://angular.io/guide/reactive-forms)
- [Form Validation](https://angular.io/guide/form-validation)

## 🐛 Troubleshooting

**Common Issues:**

1. **JSON Server not starting**: Ensure it's installed globally and db.json exists
2. **Form not submitting**: Check if JSON Server is running on port 3000
3. **Validation not working**: Verify form control names match template references
4. **Animations not showing**: Ensure BrowserAnimationsModule is imported

**Support:**
If you encounter any issues, please create an issue in the GitHub repository.
