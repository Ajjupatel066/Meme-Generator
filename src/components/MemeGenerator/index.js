import {Component} from 'react'

import {
  MainContainer,
  FormContainer,
  MainHeading,
  LabelElement,
  InputElement,
  SelectElement,
  OptionElement,
  MemeContainer,
  CustomText,
  ButtonElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    fontSizeInput: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: '',
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({fontSizeInput: event.target.value})
  }

  generateMeme = event => {
    event.preventDefault()
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      fontSize: fontSizeInput,
    })
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      fontSizeInput,
    } = this.state

    return (
      <MainContainer>
        <FormContainer as="form" onSubmit={this.generateMeme}>
          <MainHeading>Meme Generator</MainHeading>
          <LabelElement as="label" htmlFor="imageURL">
            Image URL
          </LabelElement>
          <InputElement
            as="input"
            id="imageURL"
            value={imageUrlInput}
            type="text"
            placeholder="Enter the image URL"
            onChange={this.onChangeImageUrl}
          />

          <LabelElement as="label" htmlFor="topText">
            Top Text
          </LabelElement>
          <InputElement
            as="input"
            id="topText"
            type="text"
            value={topTextInput}
            placeholder="Enter the Top Text"
            onChange={this.onChangeTopText}
          />

          <LabelElement as="label" htmlFor="bottomText">
            Bottom Text
          </LabelElement>
          <InputElement
            as="input"
            id="bottomText"
            type="text"
            value={bottomTextInput}
            placeholder="Enter the Bottom Text"
            onChange={this.onChangeBottomText}
          />

          <LabelElement as="label" htmlFor="select">
            Font Size
          </LabelElement>
          <SelectElement
            value={fontSizeInput}
            id="select"
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <OptionElement
                as="option"
                key={eachOption.optionId}
                value={eachOption.optionId}
              >
                {eachOption.displayText}
              </OptionElement>
            ))}
          </SelectElement>
          <ButtonElement type="submit">Generate</ButtonElement>
        </FormContainer>

        <MemeContainer as="div" bgImage={imageUrl} data-testid="meme">
          <CustomText fontSize={fontSize}>{topText}</CustomText>
          <CustomText fontSize={fontSize}>{bottomText}</CustomText>
        </MemeContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
