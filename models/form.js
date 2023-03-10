const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    
    title: String,                      // one item
    retention_date: Date,               // one item

    dynammic_fields: [{                 // list of <fields>
        dynamic_field_name: String,     // one item         <field member>
        label: String,                  // one item         <field member>
        placeholder: String,            // one item         <field member>
        mandatory: Boolean,             // one item         <field member>
        keywords: [String],             // list of strings  <field member>
        
        field_type: {                   // one item 
            name: String,
            options: [{
                name: String
            }]
        }
    }],                                 
    
    sections: [{                        // list of <sections>
        title: String,                  // one item         <section member>
        content: String,                // one item         <section member>
        scan_type: String               // one item         <section member>
    }],

 // _id: auto-generated ID

})
module.exports = mongoose.model('Form', formSchema)