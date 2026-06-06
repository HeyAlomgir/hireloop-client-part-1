"use client";

import React, { useState } from "react";
import { 
  Form, 
  Fieldset, 
  Select, 
  Label,
  ListBox,
  Switch, 
  Button 
} from "@heroui/react";

// Gravity UI Icons
import { Briefcase, Pin, Calendar, ArrowLeft } from "@gravity-ui/icons";

export default function PostJobPage() {
  const [isRemote, setIsRemote] = useState(false);
  const [errors, setErrors] = useState({});

  const currentCompany = {
    name: "Acme Corp (Auto-filled)",
    id: "co_12345",
    status: "Approved",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    
    data.isRemote = isRemote;
    data.companyId = currentCompany.id;
    data.status = "active";

    const newErrors = {};
    if (!data.jobTitle) newErrors.jobTitle = "Job title is required";
    if (!isRemote && !data.location) newErrors.location = "Location is required for on-site roles";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Submitting Job Data:", data);

    e.target.reset()
  };


  const inputBaseStyle = "w-full bg-[#252528] text-white placeholder-gray-500 px-4 py-2.5 rounded-xl border border-[#2d2d30] hover:border-[#3f3f46] focus:border-white focus:bg-[#252528] outline-none transition-colors h-[42px] text-sm";

  return (
    <div className="min-h-screen bg-[#121214] text-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-3xl bg-[#1c1c1f] rounded-xl border border-[#2d2d30] shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-[#2d2d30] flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-white">Post a New Job</h1>
            <p className="text-sm text-gray-400 mt-1">
              Fill out the details below to publish your opening on HireLoop.
            </p>
          </div>
          <button 
            type="button" 
            className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-[#252528] transition-colors"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <Form onSubmit={handleSubmit} className="p-6 space-y-8">
          
          {/* Section: Job Info */}
          <Fieldset className="space-y-4">
            <legend className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
              Job Information
            </legend>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Title */}
              <div className="w-full">
                <label className="text-xs font-medium text-gray-300 block mb-1.5">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="e.g. Senior Frontend Engineer"
                  className={inputBaseStyle}
                />
                {errors.jobTitle && <p className="text-xs text-red-400 mt-1">{errors.jobTitle}</p>}
              </div>

              {/* Job Category */}
              <div className="w-full">
                <Label className="text-xs font-medium text-gray-300 block mb-1.5">Job Category</Label>
                <Select className="w-full" placeholder="Select category" name="jobCategory">
                  <Select.Trigger className="w-full bg-[#252528] border border-[#2d2d30] hover:border-[#3f3f46] rounded-xl px-4 py-2 flex items-center justify-between text-white text-sm h-[42px]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-[#1c1c1f] border border-[#2d2d30] rounded-xl shadow-xl overflow-hidden text-white">
                    <ListBox className="p-1">
                      <ListBox.Item id="technology" textValue="Technology" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Technology</ListBox.Item>
                      <ListBox.Item id="design" textValue="Design" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Design</ListBox.Item>
                      <ListBox.Item id="marketing" textValue="Marketing" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Marketing</ListBox.Item>
                      <ListBox.Item id="sales" textValue="Sales" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Sales</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Job Type */}
              <div className="w-full">
                <Label className="text-xs font-medium text-gray-300 block mb-1.5">Job Type</Label>
                <Select className="w-full" placeholder="Select type" name="jobType">
                  <Select.Trigger className="w-full bg-[#252528] border border-[#2d2d30] hover:border-[#3f3f46] rounded-xl px-4 py-2 flex items-center justify-between text-white text-sm h-[42px]">
                    <Select.Value />
                    <Select.Indicator />
                  </Select.Trigger>
                  <Select.Popover className="bg-[#1c1c1f] border border-[#2d2d30] rounded-xl shadow-xl overflow-hidden text-white">
                    <ListBox className="p-1">
                      <ListBox.Item id="full-time" textValue="Full-time" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Full-time</ListBox.Item>
                      <ListBox.Item id="part-time" textValue="Part-time" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Part-time</ListBox.Item>
                      <ListBox.Item id="contract" textValue="Contract" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Contract</ListBox.Item>
                      <ListBox.Item id="internship" textValue="Internship" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">Internship</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>

              {/* Salary Fields */}
              <div className="w-full">
                <span className="text-xs font-medium text-gray-300 block mb-1.5">Salary Range & Currency</span>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="salaryMin"
                    placeholder="Min"
                    className={inputBaseStyle}
                  />
                  <input
                    type="number"
                    name="salaryMax"
                    placeholder="Max"
                    className={inputBaseStyle}
                  />
                  
                  {/* Currency Selection */}
                  <div className="w-32 flex-shrink-0">
                    <Select className="w-full" placeholder="USD" name="currency">
                      <Select.Trigger className="w-full bg-[#252528] border border-[#2d2d30] hover:border-[#3f3f46] rounded-xl px-3 py-2 flex items-center justify-between text-white text-sm h-[42px]">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>
                      <Select.Popover className="bg-[#1c1c1f] border border-[#2d2d30] rounded-xl shadow-xl overflow-hidden text-white">
                        <ListBox className="p-1">
                          <ListBox.Item id="USD" textValue="USD ($)" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">USD ($)</ListBox.Item>
                          <ListBox.Item id="EUR" textValue="EUR (€)" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">EUR (€)</ListBox.Item>
                          <ListBox.Item id="GBP" textValue="GBP (£)" className="p-2 hover:bg-[#252528] rounded-lg cursor-pointer">GBP (£)</ListBox.Item>
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Deadline Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              {/* Location Details with updated switch code */}
              <div className="w-full">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-medium text-gray-300">Location Details</span>
                  
                  {/* UPDATED SWITCH CODE FROM THE LINK */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-400">Remote</span>
                    <Switch isSelected={isRemote} onChange={setIsRemote}>
                      <Switch.Control>
                        <Switch.Thumb />
                      </Switch.Control>
                    </Switch>
                  </div>
                </div>
                
                <div className={`relative flex items-center transition-opacity ${isRemote ? 'opacity-40' : ''}`}>
                  <Pin className="absolute left-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                  <input
                    type="text"
                    name="location"
                    placeholder={isRemote ? "Remote / Anywhere" : "City, Country"}
                    disabled={isRemote}
                    className={`${inputBaseStyle} pl-10`}
                  />
                </div>
                {errors.location && <p className="text-xs text-red-400 mt-1">{errors.location}</p>}
              </div>

              {/* Application Deadline */}
              <div className="w-full">
                <label className="text-xs font-medium text-gray-300 block mb-1.5">Application Deadline</label>
                <div className="relative flex items-center">
                  <Calendar className="absolute left-3.5 text-gray-400 w-4 h-4 pointer-events-none" />
                  <input
                    type="date"
                    name="deadline"
                    className={`${inputBaseStyle} pl-10 pr-4 [color-scheme:dark] cursor-pointer`}
                  />
                </div>
              </div>
            </div>
          </Fieldset>

          <hr className="border-[#2d2d30]" />

          {/* Section: Job Description */}
          <Fieldset className="space-y-4">
            <legend className="text-xs font-semibold text-gray-500 tracking-wider uppercase mb-2">
              Job Description
            </legend>

            <div className="w-full">
              <label className="text-xs font-medium text-gray-300 block mb-1.5">Responsibilities</label>
              <textarea
                name="responsibilities"
                placeholder="Outline day-to-day duties and core tasks..."
                className="w-full bg-[#252528] text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-[#2d2d30] hover:border-[#3f3f46] focus:border-white outline-none transition-colors min-h-[110px] resize-y text-sm"
              />
            </div>

            <div className="w-full">
              <label className="text-xs font-medium text-gray-300 block mb-1.5">Requirements</label>
              <textarea
                name="requirements"
                placeholder="List required skills, experience, and certifications..."
                className="w-full bg-[#252528] text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-[#2d2d30] hover:border-[#3f3f46] focus:border-white outline-none transition-colors min-h-[110px] resize-y text-sm"
              />
            </div>

            <div className="w-full">
              <label className="text-xs font-medium text-gray-300 block mb-1.5">Benefits (Optional)</label>
              <textarea
                name="benefits"
                placeholder="Perks, healthcare, equity, flexible hours..."
                className="w-full bg-[#252528] text-white placeholder-gray-500 px-4 py-3 rounded-xl border border-[#2d2d30] hover:border-[#3f3f46] focus:border-white outline-none transition-colors min-h-[80px] resize-y text-sm"
              />
            </div>
          </Fieldset>

          <hr className="border-[#2d2d30]" />

          {/* Company Metadata Info Block */}
          <div className="bg-[#1a1a1c] border border-[#2d2d30] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-[#252528] rounded-md border border-[#3f3f46]">
                <Briefcase className="text-gray-400 w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-gray-400">Posting as Company</p>
                <p className="text-sm font-medium text-white">{currentCompany.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-medium text-emerald-400">Verified Recruiter</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-[#2d2d30]">
            <Button
              type="button"
              className="text-gray-300 hover:bg-[#252528] px-5 py-2 rounded-lg bg-transparent transition-colors"
              onClick={() => window.history.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-white text-black font-semibold hover:bg-gray-200 transition-colors px-6 py-2 rounded-lg"
            >
              Post Job
            </Button>
          </div>

        </Form>
      </div>
    </div>
  );
}